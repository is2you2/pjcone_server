/** Define dependencies.*/

const cors = require('cors');
const express = require("express");
const multer = require('multer');
/** 파일 업로드 서버 */
const app = express();
/** 파일 다운로드 서버 */
const cdn = express();
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');
const https = require('node:https');
const fs = require('node:fs');
const ws = require('ws');
const cheerio = require('cheerio');
const { v4: uuidv4 } = require('uuid');
const log4js = require('log4js');
const { Client } = require('pg');
const iconv = require('iconv-lite');

// 로그 설정
log4js.configure({
    appenders: {
        file: { type: 'file', filename: 'server.log' },
        console: { type: 'console' }
    },
    categories: {
        default: { appenders: ['file', 'console'], level: 'info' }
    }
});

// 로거 인스턴스 생성
const logger = log4js.getLogger();

/** PostgreSQL 데이터베이스 연결 설정  
 * 이 설정은 docker-compose.yml 파일의 postgres 정보와 동일해야 합니다.
 */
const client = new Client({
    user: 'postgres',
    host: 'postgres',
    database: 'nakama',
    password: 'localdb',
    port: 5432,
});

client.connect()
    .then(() => {
        logger.info('PostgreSQL 데이터베이스에 연결되었습니다.');
    }).catch(err => {
        logger.error('PostgreSQL 연결 오류:', err.stack);
        isFFSOnly = true;
    });

let isFFSOnly = false;
/** 사용자가 postgres에 존재하는지 검토 */
async function CheckPGUserExist(userId, useFFS = isFFSOnly) {
    try {
        // FFS 용도로 nodejs 만 사용중이라면 있는 사용자라고 간주하여 무조건 행동시키기
        if (useFFS) return true;
        // 데이터베이스에서 해당 ID가 존재하는지 확인
        const result = await client.query('SELECT * FROM users WHERE id = $1', [userId]);
        // 사용자가 존재하면 true 반환
        return result.rows.length > 0;
    } catch (err) {
        logger.warn('PG데이터베이스 오류', err.stack);
        return false;
    }
}

/** vapid 에서 요구는 email 정보 */
let vapid_email = 'your-email@example.com';
/** 사설 사이트 운영 */
let UseCustomSite = false;
// 포트 정보는 docker-compose.yml 에서 호스트 포트(왼쪽)를 조정하세요
/** 웹 푸쉬 알림을 수신하는 포트 */
const vapid_port = 5000;
/** 사설 사이트 포트 */
const SitePort = 12000;
/** Nakama 연계 파일 업로드 포트 */
const cdnPort = 9001;
/** 파일 게시 포트 (구 apache 서버 교체) */
const apachePort = 9002;
/** 광장 채널 등 웹 소켓 포트 */
const squarePort = 12013;
/** 보안 프로토콜 사용 여부 */
let UseSSL = true;
/** 임의의 사용자가 직접 입력하여 진입하는 것을 제한함 */
let BlockAnonymous = true;
{ // 설정파일을 불러와서 사용할 정보에 대입
    let useSSLFile = fs.readFileSync('./config.txt');
    let ReadSetup = useSSLFile.toString('utf-8');
    let sep = ReadSetup.split('\n');
    for (let line of sep) {
        let sep = line.split('=');
        switch (sep[0]) {
            case 'UseCustomSite':
                UseCustomSite = sep[1] == 'true';
                break;
            case 'VapidInfo':
                vapid_email = sep[1];
                break;
            case 'UseSSL':
                UseSSL = sep[1] == 'true';
                break;
            case 'BlockAnonymous':
                BlockAnonymous = sep[1] == 'true';
                break;
        }
    }
}

if (!BlockAnonymous) {
    logger.warn('BlockAnonymous: 익명의 사용자가 서버 자원을 자유롭게 사용할 수 있도록 설정되어있습니다.');
}

/** 웹 푸시 서버, json 직접 입력 관련 행동은 전부 이것으로 함 (가입 제한 설정 등) */
const json_app = express();
json_app.use(bodyParser.json());
json_app.use(express.static(path.join(__dirname, 'client')));

/** VAPID 키 (최초 1회만 실행 후 저장) */
let vapidKeys;

try {
    vapidKeys = JSON.parse(fs.readFileSync('./vapid.json'));
} catch (e) {
    vapidKeys = webpush.generateVAPIDKeys();
    fs.writeFileSync('./vapid.json', JSON.stringify(vapidKeys));
    logger.info('VAPID keys generated and saved: ', vapidKeys);
}

webpush.setVapidDetails(
    `mailto:${vapid_email}`,
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

json_app.use(cors());

// 클라이언트에서 구독 정보를 받음
json_app.post('/get_webpush_key', (req, res) => {
    res.status(200).json({ pubkey: vapidKeys.publicKey });
});

const webpush_subs_path = './webpush_subs.json';
function loadSubscriptions() {
    if (!fs.existsSync(webpush_subs_path)) return [];
    return JSON.parse(fs.readFileSync(webpush_subs_path)).subscriptions;
}
/** 구독자 일람 */
let subscriptions = loadSubscriptions();
function saveSubscriptions() {
    fs.writeFileSync(webpush_subs_path, JSON.stringify({ subscriptions: subscriptions }, null, 2));
}
// 구독 정보 저장
json_app.post('/subscribe', (req, res) => {
    const subscription = req.body['subscription'];
    const redirectUrl = req.body['redirectUrl'];
    const uuid = req.body['uuid'];
    const exists = subscriptions.some(s => s.subscription.endpoint === subscription.endpoint);
    if (!exists) {
        subscriptions.push({ subscription, redirectUrl, uuid });
        saveSubscriptions();
    }
    res.status(201).json({ message: 'Subscribed successfully' });
});

json_app.post('/unsubscribe', (req, res) => {
    const endpoint = req.body['endpoint'];
    subscriptions = subscriptions.filter(s => s.subscription.endpoint !== endpoint);
    saveSubscriptions();
    res.end();
});

json_app.post('/send_noti', (req, res) => {
    let senders = [];
    const users = req.body['users'];
    const title = req.body['title'];
    const body = req.body['body'];
    const icon = req.body['icon'];
    const image = req.body['image'];
    const id = req.body['id'];
    const data = req.body['data'];
    res.end(); // 정보 수신은 성공했으니 성공 회신
    for (let subscription of subscriptions)
        for (let i = 0, j = users.length; i < j; i++)
            if (subscription.uuid == users[i])
                senders.push(subscription);
    const payload = JSON.stringify({
        id: id,
        title: title,
        body: body,
        icon: icon,
        image: image,
        data: data,
    });
    for (let user of senders)
        webpush.sendNotification(user.subscription, payload)
            .catch(err => {
                if (err.statusCode === 410 || err.statusCode === 404) {
                    logger.warn('🧹 구독자 정보 무효 → 제거 필요');
                    const index = subscriptions.findIndex(s => s.subscription.endpoint === user.subscription.endpoint);
                    if (index !== -1) {
                        subscriptions.splice(index, 1);
                        saveSubscriptions();
                    }
                } else {
                    logger.error('❌ 알림 발송 실패_기타 오류:', err);
                }
            });
});

/** 웹 푸쉬 발송 예약 관리
 * WebpushSendSchedule[userId][todoId] = TimeoutSchedule;
 */
let WebpushSendSchedule = [];
// 알림 예약 발송 등록
json_app.post('/schedule_noti', (req, res) => {
    let senders = [];
    const users = req.body['users'];
    const title = req.body['title'];
    const body = req.body['body'];
    const icon = req.body['icon'];
    const image = req.body['image'];
    const todo_id = req.body['todo_id'];
    const sendTime = req.body['time'];
    const data = req.body['data'];
    /** 이건 알림 아이디 */
    const id = req.body['id'];
    res.end(); // 정보 수신은 성공했으니 성공 회신
    const currentTime = Date.now();
    const scheduleTime = sendTime - currentTime;
    if (scheduleTime > 0 || users.length > 1)
        for (let i = 0, j = users.length; i < j; i++) {
            if (!WebpushSendSchedule[users[i]]) WebpushSendSchedule[users[i]] = {};
            WebpushSendSchedule[users[i]][todo_id] = setTimeout(() => {
                for (let subscription of subscriptions)
                    if (subscription.uuid == users[i])
                        senders.push(subscription);
                const payload = JSON.stringify({
                    id: id,
                    title: title,
                    body: body,
                    icon: icon,
                    image: image,
                    data: data,
                });
                for (let user of senders)
                    webpush.sendNotification(user.subscription, payload)
                        .catch(err => {
                            if (err.statusCode === 410 || err.statusCode === 404) {
                                logger.warn('🧹 예약발송_구독자 정보 무효 → 제거 필요');
                                const index = subscriptions.findIndex(s => s.subscription.endpoint === user.subscription.endpoint);
                                if (index !== -1) {
                                    subscriptions.splice(index, 1);
                                    saveSubscriptions();
                                }
                            } else {
                                logger.error('❌ 예약 알림 발송 실패_기타 오류:', err);
                            }
                        });
            }, Math.max(scheduleTime, 0));
        }
});

// 등록된 예약 발송 삭제
json_app.post('/remove_schedule_noti', (req, res) => {
    const users = req.body['users'];
    const todo_id = req.body['todo_id'];
    res.end(); // 정보 수신은 성공했으니 성공 회신
    for (let i = 0, j = users.length; i < j; i++)
        clearTimeout(WebpushSendSchedule[users[i]]?.[todo_id]);
});

app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Method", "*");
    next();
});

cdn.use(cors());

// Multer 설정
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './cdn/');
    },
    filename: (req, file, cb) => {
        cb(null, decodeURI(req.url.substring(1)));
    }
});

const upload = multer({ storage: storage });

// 파일 업로드를 처리할 라우트 설정
app.use('/cdn/', upload.single('files'), (req, res) => {
    const uploaded_filename = decodeURI(req.url.substring(1));
    const folderPath = `./cdn/${req.body['path']}`;
    try {
        fs.mkdirSync(folderPath, { recursive: true });
    } catch (e) {
        logger.error('폴더 재귀 생성 오류: ', e);
    }
    try {
        fs.renameSync(`./cdn/${uploaded_filename}`, `${folderPath}/${req.body['filename']}`);
    } catch (e) {
        logger.error('파일 옮기기 오류: ', e);
    }
    const result = decodeURIComponent(`${req.body['path']}/${req.body['filename']}`);
    // 여기에서 필요한 작업을 수행하고 응답을 보낼 수 있음
    res.send(result);
});

/** 파일 크기 요청 */
app.use('/filesize/', (req, res) => {
    try {
        const stat = fs.statSync(`./cdn${decodeURIComponent(req.url)}`);
        res.end(`${stat.size}`);
    } catch (e) {
        res.end(`${e}`);
    }
});

/** 이 경로를 지웠을 때 폴더가 비게 된다면 부모 폴더를 삭제하기, 그것을 반복하기 */
function RecursiveOutDirRemove(_path) {
    let sep = _path.split('/');
    sep.pop();
    const parentDir = sep.join('/');
    try {
        fs.rmdirSync(parentDir);
        if (parentDir) RecursiveOutDirRemove(parentDir);
    } catch (e) {
        // 보통 cdn 폴더에서 오류가 뜨니 이 오류는 무시합니다
    }
}

/** 파일 삭제 요청 */
app.post('/remove/', upload.none(), (req, res) => {
    try {
        const path = req.body['path'];
        const uuid = req.body['uuid'];
        CheckPGUserExist(uuid).then(isRegisteredUser => {
            if (!isRegisteredUser) logger.warn('등록되지 않은 사용자의 파일 삭제 요청 수신_remove: ', req.body);
            const fullPath = `./cdn/${path}`;
            logger.info(`Remove file: ${fullPath}`);
            fs.unlink(fullPath, e => {
                logger.info(`Result: Remove file ${path}: ${e}`);
                RecursiveOutDirRemove(fullPath);
            });
            // 아래, 구 버전 호환 삭제
            fs.unlink(`./cdn${path}`, e => {
                logger.error(`Result: Remove file ${path}: ${e}`);
            });
        }).catch(e => {
            logger.warn('파일 삭제 동작 오류_remove: ', e);
        });
    } catch (e) {
        logger.warn('파일 삭제 동작 오류_remove: ', e);
    }
    res.end();
});

/** 대상 경로 내 모든 파일 및 폴더 리스트 */
function getFilesInDirectory(dir) {
    try {
        let results = [];
        // 디렉토리 내 파일 및 폴더 목록을 읽음
        const list = fs.readdirSync(dir);
        list.forEach((file) => {
            const filePath = path.join(dir, file);
            // 파일 또는 폴더에 대한 정보를 얻음
            try {
                const stats = fs.statSync(filePath);
                // 디렉토리인 경우 재귀적으로 내부 파일 탐색
                if (stats.isDirectory()) {
                    results.push(filePath);
                    results = results.concat(getFilesInDirectory(filePath)); // 재귀 호출
                } else results.push(filePath); // 파일이면 경로 추가
            } catch (e) {
                logger.warn('파일 경로 추가 오류: ', e);
            }
        });
        return results;
    } catch (e) {
        logger.error('없는 경로에 대한 요청: ', dir, ' / err: ', e);
    }
}

/** 키워드가 포함된 모든 파일 삭제 */
app.post('/remove_key/', upload.none(), (req, res) => {
    try {
        const uuid = req.body['uuid'];
        CheckPGUserExist(uuid).then(isRegisteredUser => {
            if (!isRegisteredUser) logger.warn('등록되지 않은 사용자의 파일 삭제 요청 수신_remove_key: ', req.body);
            const target_key = req.body['target_id'];
            const keys = target_key.split('_');
            let target_path = '';
            keys.forEach(key => target_path = target_path ? `${target_path}/${key}` : key);
            let listAll = getFilesInDirectory('./cdn/');
            while (listAll?.length) {
                const path = listAll.pop();
                if (path.indexOf(target_path) >= 0)
                    try {
                        const stats = fs.statSync(path);
                        // 디렉토리인 경우 재귀적으로 내부 파일 탐색
                        if (stats.isDirectory()) {
                            try {
                                fs.rmdirSync(path);
                            } catch (e) { }
                        } else fs.unlinkSync(path);
                        RecursiveOutDirRemove(`./${path}`);
                    } catch (e) {
                        logger.warn('key로 파일 삭제하기 오류: ', e);
                    }
            }
            // 아래, 구버전 호환 코드
            fs.readdir('./cdn', (err, files) => {
                logger.info(`Remove file with key: ${target_key}`);
                files.forEach(path => {
                    if (path.indexOf(target_key) >= 0) {
                        logger.info(`Remove file: ./cdn/${decodeURIComponent(path)}`);
                        fs.unlink(`./cdn/${path}`, e => {
                            logger.error(`Result: Remove file with key: ${decodeURIComponent(path)}: ${e}`);
                        });
                    }
                });
            });
        }).catch(e => {
            logger.warn('파일 삭제 동작 오류_remove_key: ', e);
        });
    } catch (e) {
        logger.warn('파일 삭제 동작 오류_remove_key: ', e);
    }
    res.end();
});

/** 가입 제한 정보 */
let RegisterLimitation;
// 준비된 가입 정보 불러오기
try {
    RegisterLimitation = JSON.parse(fs.readFileSync('./regLimit.json'));
} catch (e) {
    RegisterLimitation = {
        count: 1,
        useApproval: false,
    };
    fs.writeFileSync('./regLimit.json', JSON.stringify(RegisterLimitation));
}

// 가입 제한 정보 반환
json_app.post('/GetRegLimitInfo', (req, res) => {
    res.end(JSON.stringify(RegisterLimitation)); // 정보 수신은 성공했으니 성공 회신
});

// 가입 제한 정보 적용
json_app.post('/ApplyRegLimit', (req, res) => {
    const count = req.body['count'];
    const useApproval = req.body['useApproval'];
    RegisterLimitation.count = count;
    RegisterLimitation.useApproval = useApproval;
    fs.writeFileSync('./regLimit.json', JSON.stringify(RegisterLimitation));
    res.end();
});

/** 가입 대기 목록  
 * WaitingApproval[email] = passwd;
 */
let WaitingApproval;
// 준비된 가입 정보 불러오기
try {
    WaitingApproval = JSON.parse(fs.readFileSync('./WaitingApproval.json'));
} catch (e) {
    WaitingApproval = {};
}

/** 가입 제한 인원을 1명 줄이고 저장하기 */
function discount_reg_limit() {
    RegisterLimitation.count = RegisterLimitation.count - 1;
    fs.writeFileSync('./regLimit.json', JSON.stringify(RegisterLimitation));
}

// 자동 가입시 가용 가입 인원 수 조정
json_app.post('/AutoRegCountAct', (req, res) => {
    const email = req.body['email'];
    delete WaitingApproval[email];
    fs.writeFileSync('./WaitingApproval.json', JSON.stringify(WaitingApproval));
    discount_reg_limit();
    res.end();
});

// 가입 대기열에 자신의 정보를 추가하기
json_app.post('/PushReqApprovalUser', (req, res) => {
    const email = req.body['email'];
    const passwd = req.body['password'];
    const title = req.body['title'];
    const data = req.body['data'];
    WaitingApproval[email] = passwd;
    fs.writeFileSync('./WaitingApproval.json', JSON.stringify(WaitingApproval));
    discount_reg_limit();
    let senders = [];
    for (let subscription of subscriptions)
        for (let i = 0, j = admin_uuids.length; i < j; i++)
            if (subscription.uuid == admin_uuids[i])
                senders.push(subscription);
    const payload = JSON.stringify({
        id: 'approval',
        title: title,
        body: email,
        icon: 'favicon',
        data: data,
    });
    for (let user of senders)
        webpush.sendNotification(user.subscription, payload)
            .catch(err => {
                if (err.statusCode === 410 || err.statusCode === 404) {
                    logger.warn('🧹 구독자 정보 무효 → 제거 필요');
                    const index = subscriptions.findIndex(s => s.subscription.endpoint === user.subscription.endpoint);
                    if (index !== -1) {
                        subscriptions.splice(index, 1);
                        saveSubscriptions();
                    }
                } else {
                    logger.error('❌ 알림 발송 실패_기타 오류:', err);
                }
            });
    res.end();
});

/** 관리자 페이지에 진입한 사용자의 uuid를 기억함  
 * 가입 관련 행동에 대한 알림 발송 구현
 */
let admin_uuids = [];

// 가입 대기열 불러오기
json_app.post('/GetNeedApprovalList', (req, res) => {
    const admin_uuid = req.body['uuid'];
    if (!admin_uuids.includes(admin_uuid)) admin_uuids.push(admin_uuid);
    res.end(JSON.stringify(WaitingApproval));
});

// 가입 대기중인 사용자 승인
json_app.post('/ApprovalUser', async (req, res) => {
    const email = req.body['email'];
    delete WaitingApproval[email];
    fs.writeFileSync('./WaitingApproval.json', JSON.stringify(WaitingApproval));
    res.end();
});

/** 이미지 URL이 유효한지 확인하는 함수 */
async function isValidImageUrl(url) {
    try {
        // 이미지 URL이 실제 이미지 확장자를 포함하는지 확인
        const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.svg'];
        const hasImageExtension = imageExtensions.some(ext => url.endsWith(ext));

        if (!hasImageExtension) return false;  // 이미지 확장자가 아니면 유효하지 않다고 판단

        // URL을 HEAD 요청을 보내서 상태 코드 확인
        const response = await fetch(url, { method: 'HEAD' });
        return response.status === 200;  // 200 OK이면 유효한 URL
    } catch (error) {
        return false;  // 오류 발생시 유효하지 않음
    }
}

/** 재귀적으로 이미지 URL을 수집하는 함수 */
async function getImageSrcRecursive($, len, index = 0) {
    try {
        // 이미지 태그의 src 속성을 추출합니다
        const imageSrc = $('img').eq(index);
        if (index > len) throw '페이지에 이미지 정보가 없음';

        if (!imageSrc) {
            return null;  // 더 이상 이미지가 없으면 null을 반환
        }

        // 이미지 URL이 유효한지 확인
        const isValid = await isValidImageUrl(imageSrc.attr('src'));
        const result = {
            src: imageSrc.attr('src'),
            alt: imageSrc.attr('src'),
        }

        if (isValid) {
            return result;  // 유효한 이미지를 찾으면 해당 URL을 반환
        } else {
            return getImageSrcRecursive($, len, index + 1);  // 유효하지 않으면 다음 이미지를 재귀적으로 시도
        }
    } catch (error) {
        return null;
    }
}

/** 파일이 웹 페이지인지 확인하는 함수 */
async function CheckifWebPage(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        const contentType = response.headers.get('Content-Type');

        // 웹 페이지인 경우 'text/html' MIME 타입을 확인
        if (contentType && contentType.startsWith('text/html')) {
            return true;  // 웹 페이지라면 true 반환
        }
        return false;  // 웹 페이지가 아니라면 false 반환
    } catch (error) {
        return false;  // 오류 발생 시 웹 페이지가 아님
    }
}

app.use('/get-page-info', async (req, res) => {
    const url = req.query.url;

    if (!url) return res.status(400).json({ error: 'URL is required' });

    try {
        // 먼저 URL이 미디어 파일인지 확인
        const isWebPage = await CheckifWebPage(url);
        if (!isWebPage) return res.status(400).json({ error: 'URL points to a media file, not a webpage' });

        // responseType을 직접 제어할 수 없기 때문에 buffer로 읽음
        const response = await fetch(url);
        const buffer = await response.arrayBuffer();
        const raw = Buffer.from(buffer);

        // 인코딩을 헤더에서 추정
        const contentType = response.headers.get('content-type') || '';
        let encoding = 'utf-8';
        if (/euc-kr|cp949/i.test(contentType)) {
            encoding = 'euc-kr';
        } else {
            // meta 태그로 보조 감지
            const metaMatch = raw.toString().match(/charset=["']?([\w-]+)/i);
            if (metaMatch && /euc-kr|cp949/i.test(metaMatch[1])) {
                encoding = 'euc-kr';
            }
        }

        // 인코딩 적용하여 문자열 변환
        const asText = iconv.decode(raw, encoding);
        const $ = cheerio.load(asText);

        let title = $('title').text();

        // 타이틀이 비어 있으면 <h1> 또는 <h2> 태그에서 대체 텍스트를 찾습니다
        if (!title) {
            title = $('h1').first().text() || $('h2').first().text();
        }

        if (!title) {
            title = $('meta[property="og:title"]').attr('content');
        }

        const description = $('meta[name="description"]').attr('content');

        let result = {
            title: title,
            description: description,
            url: url,
        }
        // og:image 메타 태그에서 썸네일 URL을 추출합니다
        const thumbnailUrl = $('meta[property="og:image"]').attr('content');
        if (thumbnailUrl) {
            result['imageUrl'] = thumbnailUrl;
            result['imageAlt'] = 'thumbnail';
        } else {
            // 실패했다면 잡히는 이미지 아무거나를 잡아냅니다
            const imageCount = $('img').length;
            let imageInfo = await getImageSrcRecursive($, imageCount);
            if (imageInfo) {
                // 이미지의 URL과 alt 텍스트 추출
                const imageUrl = imageInfo.src;
                const imageAlt = imageInfo.alt || 'No alt text';

                // 이미지 URL이 상대 경로일 경우 절대 경로로 변환
                const fullImageUrl = imageUrl.indexOf('http') == 0 ? imageUrl : new URL(imageUrl, url).href;
                result['imageUrl'] = fullImageUrl;
                result['imageAlt'] = imageAlt;
            }
        }
        res.send(JSON.stringify(result));
    } catch (e) {
        logger.error(e);
        res.status(500).json({ error: 'Error fetching the page information' });
    }
});

let wss;

cdn.use(express.static(path.join(__dirname, './')));
try {
    if (!UseSSL) throw '비보안 사용 설정';
    const private = fs.readFileSync('/root/private.key');
    const public = fs.readFileSync('/root/public.crt');
    const options = {
        key: private,
        cert: public,
    };

    https.createServer(options, app).listen(cdnPort, "0.0.0.0", () => {
        logger.info(`Open cdn on port ${cdnPort}`);
    });

    https.createServer(options, cdn).listen(apachePort, "0.0.0.0", () => {
        logger.info(`Open page on port ${apachePort}`);
    });

    const secure_server = https.createServer(options);
    wss = new ws.Server({ server: secure_server });

    secure_server.listen(squarePort, () => {
        logger.info(`Working on port ${squarePort}`);
    });

    https.createServer(options, json_app).listen(vapid_port, "0.0.0.0", () => {
        logger.info(`Open page on port ${vapid_port}`);
    });
} catch (e) {
    logger.info(e);
    app.listen(cdnPort, "0.0.0.0", () => {
        logger.info(`Open cdn on port ${cdnPort}: No Secure`);
    });

    cdn.listen(apachePort, "0.0.0.0", () => {
        logger.info(`Open page on port ${apachePort}: No Secure`);
    });

    wss = new ws.Server({ port: squarePort }, () => {
        logger.info(`Open square on port ${squarePort}: No Secure`);
    });

    json_app.listen(vapid_port, () => logger.info(`Open webpush on port ${vapid_port}: No Secure`));
}


/** 사설 그룹채팅 클라이언트 맵
 * dedi_client[channel_id][pid] = { ws, name };
 */
const dedi_client = {};
/** 사용자가 참여한 채널  
 * joined_channel[pid] = channel_id;
 */
const joined_channel = {};
/** 아케이드 생성시 등록된 게임 및 사용자 정보  
 * regInfo[pid] = { channel_id, game_url, game_info ... };
 */
const regInfo = {};

// 8자리 랜덤 문자열 생성 함수
function generateRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const length = 8;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

// 중복되지 않는 랜덤 문자열 생성 함수
function generateUniqueRandomString() {
    let randomString;
    randomString = generateRandomString();
    // 중복되지 않도록 새로운 문자열을 생성
    let keys = Object.keys(regInfo);
    if (keys.includes(randomString))
        return generateUniqueRandomString();
    return randomString;
}

/** 이미 uuid가 사용중인지 검토하기 */
function CreateUUIDv4() {
    let clientId = uuidv4();
    let keys = Object.keys(joined_channel);
    if (keys.includes(clientId))
        return CreateUUIDv4();
    return clientId;
}

// 웹 소켓 서버 구성
wss.on('connection', (ws, req) => {
    let clientId = CreateUUIDv4();
    const clientIp = req.socket.remoteAddress;
    logger.info('새로운 연결에 pid 지정: ', `${clientId} (${clientIp})`);
    // 사용자 uuid를 명시하고 모든 사용자에게 브로드캐스트
    ws.on('message', (msg) => {
        try {
            let json = JSON.parse(msg);
            const json_duplicate = JSON.parse(JSON.stringify(json));
            if (json_duplicate['part'])
                json_duplicate['part'] = `${json_duplicate['part'].substring(0, 10)}... ${json_duplicate['part'].length} characters`;
            // logger.info(`${clientId}_사용자가 다음과 같은 행동 요청: `, json_duplicate);
            let channel_id = json['channel'] || joined_channel[clientId];
            switch (json['type']) {
                // WebRTC 정보 교신시 발신자 명시처리
                case 'socket_react':
                    json['sender'] = clientId;
                    break;
                // 사용자 핑 알려주기, 같은 채널 내 다른 사용자의 핑 정보도 표기
                case 'ping':
                    if (!dedi_client[channel_id]['ping'])
                        dedi_client[channel_id]['ping'] = {};
                    dedi_client[channel_id]['ping'][clientId] = json['ping'];
                    ws.send(JSON.stringify({
                        type: 'pong',
                        others: dedi_client[channel_id]['ping'],
                    }));
                    return;
                // 사용자가 생성한 정보를 요청하는 경우
                // 요청한 정보만 반환하고 추가작업을 하지 않음
                case 'reqInfo':
                    if (regInfo[json.socketId]) {
                        const copied = JSON.parse(JSON.stringify(regInfo[json.socketId]));
                        copied['uid'] = clientId;
                        copied['users'] = Object.keys(dedi_client[regInfo[json.socketId]['channel_id']]['users']);
                        ws.send(JSON.stringify(copied));
                    } else {
                        logger.log('만료된 채널에 접근중: ', json.socketId);
                        ws.close(1000, 'expired');
                    }
                    return;
                // 사용자가 아케이드를 생성하면 자신의 pid 및 pck 정보를 기록시키고
                // 새 채널을 구성하여 돌려주기
                case 'initInfo': {
                    const socketId = generateUniqueRandomString();
                    regInfo[socketId] = {};
                    regInfo[socketId]['type'] = 'req_info';
                    regInfo[socketId]['url'] = json.url;
                    regInfo[socketId]['act'] = json.act;
                    const new_channel_id = CreateUUIDv4();
                    regInfo[socketId]['channel_id'] = new_channel_id;
                    let init = {
                        type: 'init_id',
                        id: new_channel_id,
                        uid: clientId,
                        socketId: socketId,
                        url: json?.url,
                    }
                    dedi_client[new_channel_id] = {
                        users: {},
                        socketId: socketId,
                    };
                    // 최대 인원이 제한된 경우 설정처리
                    if (json['max'] !== undefined) dedi_client[new_channel_id]['max'] = json.max;
                    ws.send(JSON.stringify(init));
                    return;
                }
                // 사용자에게 새 채널 id를 구성하여 전달
                // 채널만 생성되고 클라이언트 쪽에서 'init_id' 타입을 받으면 채널 진입을 따로 진행한다
                case 'init':
                    let new_channel_id = CreateUUIDv4();
                    let init = {
                        type: 'init_id',
                        id: new_channel_id,
                        uid: clientId,
                    }
                    dedi_client[new_channel_id] = {
                        users: {},
                    };
                    // 최대 인원이 제한된 경우 설정처리
                    if (json['max'] !== undefined) dedi_client[new_channel_id]['max'] = json.max;
                    ws.send(JSON.stringify(init));
                    return;
                // 광장 채널에서 FFS 우선처리가 된 경우 별도 클라이언트 연결
                case 'override':
                    clientId = json['clientId'];
                // 새로운 사용자 참여
                case 'join':
                    // 참여 예정 채널이 없다면 사용자 아이디로 새 채널 만들기
                    // 이 경우 사용자는 방장으로서 동작한다
                    const isCreateChannel = !json['channel'];
                    if (isCreateChannel)
                        channel_id = clientId;
                    // 직접 입력으로 들어왔으나 서버에서 익명 사용자 행동을 제한하는 경우
                    if (json['customInput'] && BlockAnonymous) {
                        ws.close(1000, 'BlockAnonymous');
                        return;
                    }
                    // 진입한 채널은 사용자 별로 중복 관리한다
                    joined_channel[clientId] = channel_id;
                    if (!dedi_client[channel_id]) {
                        // 빠른 진입으로 들어왔는데 채널이 없다면 만료된 채널로 알리기
                        if (json['quick']) {
                            ws.send(JSON.stringify({
                                type: 'expired',
                            }));
                            return;
                        }
                        dedi_client[channel_id] = {
                            users: {},
                        };
                        logger.info('채널 생성: ', channel_id);
                    }
                    // 채널 생성 정보라면 추가 정보 입력하기
                    if (isCreateChannel) {
                        if (json['max'] !== undefined) dedi_client[channel_id]['max'] = json.max;
                        dedi_client[channel_id]['isOwnChannel'] = true;
                    }
                    if (json['max'] === undefined) json['max'] = dedi_client[channel_id]['max'];
                    // 최대 인원이 지정된 경우 진입 막기
                    if (dedi_client[channel_id]['max']) {
                        const MAX_COUNT = dedi_client[channel_id]['max'];
                        const CURRENT_COUNT = Object.keys(dedi_client[channel_id]['users']).length;
                        if (CURRENT_COUNT >= MAX_COUNT) {
                            logger.warn('최대 인원 초과로 막힘: ', clientId);
                            setTimeout(() => {
                                ws.close(1000, 'max_limit');
                            }, 500);
                            return;
                        }
                    }
                    if (!dedi_client[channel_id]['users'][clientId]) {
                        dedi_client[channel_id]['users'][clientId] = {};
                        dedi_client[channel_id]['users'][clientId]['ws'] = ws;
                        dedi_client[channel_id]['users'][clientId]['name'] = json['name'];
                    }
                    json['channel'] = channel_id;
                    // 진입시 채널 내 사용자에게 현재 총 인원 수를 전파
                    json['count'] = Object.keys(dedi_client[channel_id]['users']).length;
                    // 진입시 개인화된 채널인지 (방장 채널인지) 여부를 회신
                    json['isOwnChannel'] = dedi_client[channel_id]['isOwnChannel'];
                    break;
                // 특정 사용자를 내보냄
                case 'kick': {
                    dedi_client[channel_id]['users'][pid]['ws'].close(1000, 'kick');
                } return;
                // 사용자 정보를 추가로 업데이트함
                case 'update': {
                    const keys = json['keys'];
                    for (const key of keys)
                        dedi_client[channel_id]['users'][clientId][key] = json[key];
                    ws.send(JSON.stringify({
                        type: 'update',
                        result: true,
                    }));
                } return;
                // 채널 정보를 추가로 업데이트함
                case 'update_channel': {
                    const keys = json['keys'];
                    for (const key of keys)
                        dedi_client[channel_id][key] = json[key];
                    ws.send(JSON.stringify({
                        type: 'update_channel',
                        result: true,
                    }));
                } return;
                case 'update_reqInfo': {
                    const keys = json['keys'];
                    const socketId = json.socketId;
                    for (const key of keys)
                        regInfo[socketId][key] = json[key];
                    ws.send(JSON.stringify({
                        type: 'update_reqInfo',
                        result: true,
                    }));
                } return;
                // 사용자 정보 중 일부를 수집하기
                case 'userInfo':
                    const targetUser = json['target'];
                    let result = {
                        type: 'userInfo',
                    };
                    // 채널이 남아있는지 검토
                    if (dedi_client[channel_id]) {
                        // 존재하는 사용자라면 정보 수집해서 반환
                        if (dedi_client[channel_id]['users']?.[targetUser]) {
                            const keys = json['keys'];
                            for (const key of keys)
                                result[key] = dedi_client[channel_id]['users'][targetUser][key];
                            ws.send(JSON.stringify(result));
                        } else {
                            result['error'] = 'User not exist';
                            ws.send(JSON.stringify(result));
                        }
                    } else {
                        result['error'] = 'Channel not exist';
                        ws.send(JSON.stringify(result));
                    }
                    return;
                default:
                    break;
            }
            json['uid'] = clientId;
            json_str = JSON.stringify(json);
            // 특정인에게 보내기가 지정되어있으면 특정인에게만 보냄
            if (json['send_to'] && dedi_client[channel_id]['users'][json['send_to']]) {
                dedi_client[channel_id]['users'][json['send_to']]['ws'].send(json_str);
            } else { // 채널 내 메시지 전파
                let keys = Object.keys(dedi_client[channel_id]['users']);
                for (let i = 0, j = keys.length; i < j; i++)
                    dedi_client[channel_id]['users'][keys[i]]['ws'].send(json_str);
            }
        } catch (e) {
            logger.error(`json 행동 오류: ${e} // msg: ${msg} // `, e);
            // 클라이언트에게 메시지 반환
            ws.send('서버에서 받은 메시지: ' + msg);
        }
    });

    // 연결이 종료되었을 때 실행되는 콜백 함수
    ws.on('close', (code, reason) => {
        logger.info('사용자 연결 종료: ', `${clientId} (${clientIp})`);
        // 모든 사용자에게 사용자 나감 전파
        try {
            const channel_id = joined_channel[clientId];
            // 이 서버에 파일을 직접 게시했다면 해당 사용자의 파일 삭제
            fs.readdir('./cdn', (err, files) => {
                logger.info(`Remove file with key: /tmp_${channel_id}_${clientId}`);
                files.forEach(path => {
                    if (path.indexOf(`tmp_${channel_id}_${clientId}`) >= 0) {
                        logger.info(`Remove file: ./cdn/${decodeURIComponent(path)}`);
                        fs.unlink(`./cdn/${path}`, e => {
                            logger.error(`Result: Remove file with key: ${decodeURIComponent(path)}: ${e}`);
                        });
                    }
                });
            });
            if (!channel_id) throw '채널 진입 실패한 사용자의 연결 끊어짐';
            if (!dedi_client[channel_id]) throw '이미 지워진 채널';
            if (!dedi_client[channel_id]['users'][clientId]) throw '등록되지 않은 사용자 (인원 제한 등으로 진입 직후 탈퇴처리)';
            const catch_name = dedi_client[channel_id]['users'][clientId]['name'];
            let keys = Object.keys(dedi_client[channel_id]['users']);
            /** 방장으로 지정된 사람이 탈퇴한 경우 */
            const isHostLeft = channel_id == clientId;
            for (let key of keys)
                // 방장이 나갔다면 모든 사람들 탈퇴처리
                if (isHostLeft) {
                    dedi_client[channel_id]['users'][key]['ws'].close(1000, 'HostLeft');
                } else {
                    // 그게 아니라면 사용자 퇴장 알림처리
                    let count = {
                        uid: clientId,
                        name: catch_name,
                        type: 'leave',
                        count: keys.length - 1,
                    }
                    let msg = JSON.stringify(count);
                    dedi_client[channel_id]['users'][key]['ws'].send(msg);
                }
            delete dedi_client[channel_id]['users']?.[clientId];
            delete dedi_client[channel_id]['ping']?.[clientId];
            delete joined_channel[clientId];
            { // 사람이 없으면 채널 삭제처리
                let keys = Object.keys(dedi_client[channel_id]['users']);
                if (keys.length < 1) {
                    const CreatedSocketId = dedi_client[channel_id]['socketId'];
                    if (CreatedSocketId && regInfo[CreatedSocketId]) {
                        logger.log('토큰 정보 삭제: ', CreatedSocketId);
                        delete regInfo[CreatedSocketId];
                    }
                    delete dedi_client[channel_id];
                    logger.info('채널 삭제: ', channel_id);
                }
            }
            if (joined_channel[clientId]['socketId']) {
                logger.log('토큰 정보 삭제 (최종): ', CreatedSocketId);
                delete regInfo[joined_channel[clientId]['socketId']];
            }
        } catch (e) {
            logger.info('사용자 퇴장 정보: ', e, ` // ${reason} (${code})`);
        }
    });
});

// 이 서버를 이용하면 http://localhost:{SitePort} 로 페이지를 이용할 수 있고
// 앱에서 비보안 서버에 접속할 때 기능에 제한 없이 사용할 수 있습니다.
try {
    if (!UseCustomSite) throw '사이트를 운영하지 않기로 설정됨';
    try {
        if (!UseSSL) throw '비보안 사용 설정';
        const private = fs.readFileSync('/root/private.key');
        const public = fs.readFileSync('/root/public.crt');
        const options = {
            key: private,
            cert: public,
        };
        // 정적 파일 제공: /www 폴더의 파일을 / 경로로 제공
        app.use(express.static('./www'));
        // 간단한 라우터 설정
        app.get('/', (req, res) => {
            res.send('Hello, Secure World!');
        });
        // https.createServer()로 SSL을 적용한 서버 실행
        https.createServer(options, app).listen(SitePort, () => {
            logger.info(`HTTPS server is running on https://localhost:${SitePort}`);
        });
    } catch (e) {
        app.use(express.static(path.join(__dirname, './www')));
        app.listen(SitePort, () => {
            logger.info(`서버가 http://localhost:${SitePort}에서 실행 중입니다.`);
        });
    }
} catch (e) {
    logger.warn('사설 사이트 켜기 오류: ', e);
}