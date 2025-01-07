/** Define dependencies.*/

var cors = require('cors');
var express = require("express");
var multer = require('multer');
var app = express();
const path = require('path');
const https = require('node:https');
const fs = require('node:fs');
const ws = require('ws');
const cheerio = require('cheerio');
const { v4: uuidv4 } = require('uuid');
const log4js = require('log4js');

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

/** 사설 사이트 운영 */
let UseCustomSite = true;
/** 사설 사이트 포트 */
let SitePort = 12000;
/** Nakama 연계 파일 서버 포트 */
let cdnPort = 9001;
/** 광장 채널 등 웹 소켓 포트 */
let squarePort = 12013;
/** 보안 프로토콜 사용 여부 */
let UseSSL = true;
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
            case 'SitePort':
                SitePort = Number(sep[1]);
                break;
            case 'cdnPort':
                cdnPort = Number(sep[1]);
                break;
            case 'squarePort':
                squarePort = Number(sep[1]);
            case 'UseSSL':
                UseSSL = sep[1] == 'true';
                break;
        }
    }
}

app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Method", "*");
    next();
});

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
    // req.file은 업로드된 파일의 정보를 가지고 있음
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
    const stat = fs.statSync(`./cdn${decodeURIComponent(req.url)}`);
    res.end(`${stat.size}`);
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
app.use('/remove/', (req, res) => {
    const path = decodeURIComponent(req.url);
    const fullPath = `./cdn${path}`;
    logger.info(`Remove file: ${fullPath}`);
    fs.unlink(fullPath, e => {
        logger.info(`Result: Remove file ${path}: ${e}`);
        RecursiveOutDirRemove(fullPath);
    });
    // 아래, 구 버전 호환 삭제
    fs.unlink(`./cdn${decodeURIComponent(req.url)}`, e => {
        logger.error(`Result: Remove file ${decodeURIComponent(req.url)}: ${e}`);
    });
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
            const stats = fs.statSync(filePath);
            // 디렉토리인 경우 재귀적으로 내부 파일 탐색
            if (stats.isDirectory()) {
                results.push(filePath);
                results = results.concat(getFilesInDirectory(filePath)); // 재귀 호출
            } else results.push(filePath); // 파일이면 경로 추가
        });
        return results;
    } catch (e) {
        logger.error('없는 경로에 대한 요청: ', dir, ' / err: ', e);
    }
}

/** 키워드가 포함된 모든 파일 삭제 */
app.use('/remove_key/', (req, res) => {
    const target_key = `${decodeURIComponent(req.url).substring(1)}`;
    const keys = target_key.split('_');
    let target_path = '';
    keys.forEach(key => target_path = target_path ? `${target_path}/${key}` : key);
    let listAll = getFilesInDirectory('./cdn/' + target_path);
    while (listAll?.length) {
        const path = listAll.pop();
        console.log('이게 사라지나: ', listAll?.length);
        const stats = fs.statSync(path);
        // 디렉토리인 경우 재귀적으로 내부 파일 탐색
        if (stats.isDirectory()) {
            try {
                fs.rmdirSync(path);
            } catch (e) { }
        } else fs.unlinkSync(path);
        if (!listAll?.length) {
            console.log('마지막 경로 뭐야: ', `.${path}`);
            RecursiveOutDirRemove(`./${path}`);
        }
    }
    // 아래, 구버전 호환 코드
    fs.readdir('./cdn', (err, files) => {
        logger.info(`Remove file with key: ${decodeURIComponent(req.url)}`);
        files.forEach(path => {
            if (path.indexOf(target_key) >= 0) {
                logger.info(`Remove file: ./cdn/${decodeURIComponent(path)}`);
                fs.unlink(`./cdn/${path}`, e => {
                    logger.error(`Result: Remove file with key: ${decodeURIComponent(path)}: ${e}`);
                });
            }
        });
    });
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
        const response = await fetch(url);
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

app.use('/get-page-info', async (req, res) => {
    const url = req.query.url;

    if (!url) return res.status(400).json({ error: 'URL is required' });

    try {
        const response = await fetch(url);
        let asText = await response.text();
        const $ = cheerio.load(asText);

        let title = $('title').text();

        // 타이틀이 비어 있으면 <h1> 또는 <h2> 태그에서 대체 텍스트를 찾습니다
        if (!title) {
            title = $('h1').first().text() || $('h2').first().text();
        }

        if (!title) {
            title = $('meta[property="og:title"]').attr('content');
        }

        if (!title) {
            throw '타이틀 정보 수집 실패';
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
        res.status(500).json({ error: 'Error fetching the page information' });
    }
});

let wss;
let secure_server;
if (UseSSL) {
    const options = {
        key: fs.readFileSync('/usr/local/apache2/conf/private.key'),
        cert: fs.readFileSync('/usr/local/apache2/conf/public.crt'),
    };

    https.createServer(options, app).listen(cdnPort, "0.0.0.0", () => {
        logger.info(`Working on port ${cdnPort}`);
    });

    secure_server = https.createServer(options);
    wss = new ws.Server({ server: secure_server });
} else {
    app.listen(cdnPort, "0.0.0.0", () => {
        logger.info(`Working on port ${cdnPort}: No Secure`);
    });

    wss = new ws.Server({ port: squarePort }, () => {
        logger.info(`Working on port ${squarePort}: No Secure`);
    });
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
            logger.info(`${clientId}_사용자가 다음과 같은 행동 요청: `, json_duplicate);
            let channel_id = json['channel'] || joined_channel[clientId];
            let additional_info = {};
            switch (json['type']) {
                // 사용자가 생성한 정보를 요청하는 경우
                // 요청한 정보만 반환하고 추가작업을 하지 않음
                case 'reqInfo':
                    ws.send(JSON.stringify(regInfo[json.socketId]));
                    return;
                // 사용자가 아케이드를 생성하면 자신의 pid 및 pck 정보를 기록시키고
                // 새 채널을 구성하여 돌려주기
                case 'initInfo':
                    let socketId = generateUniqueRandomString();
                    regInfo[socketId] = {};
                    regInfo[socketId]['type'] = 'req_info';
                    regInfo[socketId]['arcade_url'] = json?.arcade_url;
                    additional_info['socketId'] = socketId;
                    additional_info['arcade_url'] = json?.arcade_url;
                // 사용자에게 새 채널 id를 구성하여 전달
                // 채널만 생성되고 클라이언트 쪽에서 'init_id' 타입을 받으면 채널 진입을 따로 진행한다
                case 'init':
                    let new_channel_id = CreateUUIDv4();
                    let init = {
                        type: 'init_id',
                        id: new_channel_id,
                        uid: clientId,
                        ...additional_info,
                    }
                    dedi_client[new_channel_id] = {
                        users: {},
                    };
                    // 최대 인원이 제한된 경우 설정처리
                    if (json['max']) dedi_client[new_channel_id]['max'] = json.max;
                    ws.send(JSON.stringify(init));
                    return;
                // 광장 채널에서 FFS 우선처리가 된 경우 별도 클라이언트 연결
                case 'override':
                    clientId = json['clientId'];
                // 새로운 사용자 참여
                case 'join':
                    // 참여 예정 채널이 없다면 사용자 아이디로 새 채널 만들기
                    // 이 경우 사용자는 방장으로서 동작한다
                    if (!json['channel'])
                        channel_id = clientId;
                    // 진입한 채널은 사용자 별로 중복 관리한다
                    joined_channel[clientId] = channel_id;
                    if (!dedi_client[channel_id]) {
                        dedi_client[channel_id] = {
                            users: {},
                        };
                        logger.info('채널 생성: ', channel_id);
                    }
                    // 최대 인원이 지정된 경우 진입 막기
                    if (dedi_client[channel_id]['max']) {
                        const MAX_COUNT = dedi_client[channel_id]['max'];
                        const CURRENT_COUNT = Object.keys(dedi_client[channel_id]['users']).length;
                        if (CURRENT_COUNT >= MAX_COUNT) {
                            delete joined_channel[clientId];
                            ws.send(JSON.stringify({
                                type: 'block',
                                reason: 'max_limit',
                            }));
                            return;
                        }
                    }
                    if (!dedi_client[channel_id]['users'][clientId]) {
                        dedi_client[channel_id]['users'][clientId] = {};
                        dedi_client[channel_id]['users'][clientId]['ws'] = ws;
                        dedi_client[channel_id]['users'][clientId]['name'] = json['name'];
                    }
                    json['channel'] = channel_id;
                    { // 진입시 채널 내 사용자에게 현재 총 인원 수를 전파
                        let keys = Object.keys(dedi_client[channel_id]['users']);
                        for (let i = 0, j = keys.length; i < j; i++)
                            dedi_client[channel_id]['users'][keys[i]]['ws'].send(JSON.stringify({ count: j }));
                    }
                    break;
                default:
                    break;
            }
            json['uid'] = clientId;
            json = JSON.stringify(json);
            { // 채널 내 메시지 전파
                let keys = Object.keys(dedi_client[channel_id]['users']);
                for (let i = 0, j = keys.length; i < j; i++)
                    dedi_client[channel_id]['users'][keys[i]]['ws'].send(json);
            }
        } catch (e) {
            logger.error(`json 변환 오류: ${e} // msg: ${msg}`);
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
                    dedi_client[channel_id]['users'][key]['ws'].close(1000);
                } else {
                    // 그게 아니라면 사용자 퇴장 알림처리
                    let count = {
                        uid: clientId,
                        name: catch_name,
                        type: 'leave',
                        count: keys.length,
                    }
                    let msg = JSON.stringify(count);
                    dedi_client[channel_id]['users'][key]['ws'].send(msg);
                }
            delete dedi_client[channel_id]['users'][clientId];
            if (joined_channel[clientId]['socketId'])
                delete regInfo[joined_channel[clientId]['socketId']];
            delete joined_channel[clientId];
            { // 사용자 퇴장시 모든 사용자에게 현재 총 인원 수를 브로드캐스트
                let keys = Object.keys(dedi_client[channel_id]['users']);
                for (let i = 0, j = keys.length; i < j; i++)
                    dedi_client[channel_id]['users'][keys[i]]['ws'].send(JSON.stringify({ count: j }));
                // 사람이 없으면 채널 삭제처리
                if (keys.length < 1) {
                    delete dedi_client[channel_id];
                    logger.info('채널 삭제: ', channel_id);
                }
            }
        } catch (e) {
            logger.info('사용자 퇴장 정보: ', e);
        }
    });
});

if (UseSSL)
    secure_server.listen(squarePort, () => {
        logger.info(`Working on port ${squarePort}`);
    });

// 이 서버를 이용하면 http://localhost:{SitePort} 로 페이지를 이용할 수 있고
// 앱에서 비보안 서버에 접속할 때 기능에 제한 없이 사용할 수 있습니다.
try {
    if (!UseCustomSite) throw '사이트를 운영하지 않기로 설정됨';
    app.use(express.static(path.join(__dirname, './www')));
    app.listen(SitePort, () => {
        logger.info(`서버가 http://localhost:${SitePort}에서 실행 중입니다.`);
    });
} catch (e) {
    logger.warn('사설 사이트 켜기 오류: ', e);
}