/** Define dependencies.*/

var cors = require('cors');
var express = require("express");
var multer = require('multer');
var app = express();
const path = require('path');
const https = require('node:https');
const fs = require('node:fs');
const ws = require('ws');
const { v4: uuidv4 } = require('uuid');

/** 사설 사이트 운영 */
let UseCustomSite = true;
/** 사설 사이트 포트 */
let SitePort = 12000;
/** Nakama 연계 파일 서버 포트 */
let cdnPort = 9001;
/** 광장 채널 포트 */
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
    destination: function (req, file, cb) {
        cb(null, './cdn/');
    },
    filename: function (req, file, cb) {
        cb(null, decodeURI(req.url.substring(1)));
    }
});

const upload = multer({ storage: storage });

// 파일 업로드를 처리할 라우트 설정
app.use('/cdn/', upload.single('files'), function (req, res) {
    // req.file은 업로드된 파일의 정보를 가지고 있음
    // 여기에서 필요한 작업을 수행하고 응답을 보낼 수 있음
    res.send('file_server');
});

/** 파일 크기 요청 */
app.use('/filesize/', (req, res) => {
    let stat = fs.statSync(`./cdn${decodeURIComponent(req.url)}`);
    res.end(`${stat.size}`);
});

/** 파일 삭제 요청 */
app.use('/remove/', (req, res) => {
    console.log(`Remove file: ./cdn${decodeURIComponent(req.url)}`);
    fs.unlink(`./cdn${decodeURIComponent(req.url)}`, e => {
        console.error(`Result: Remove file ${decodeURIComponent(req.url)}: ${e}`);
    });
    res.end();
});

/** 키워드가 포함된 모든 파일 삭제 */
app.use('/remove_key/', (req, res) => {
    let target_key = `${decodeURIComponent(req.url).substring(1)}`;
    fs.readdir('./cdn', (err, files) => {
        console.log(`Remove file with key: ${decodeURIComponent(req.url)}`);
        files.forEach(path => {
            if (path.indexOf(target_key) >= 0) {
                console.log(`Remove file: ./cdn/${decodeURIComponent(path)}`);
                fs.unlink(`./cdn/${path}`, e => {
                    console.error(`Result: Remove file with key: ${decodeURIComponent(path)}: ${e}`);
                });
            }
        });
    });
    res.end();
});

let wss;
let secure_server;
if (UseSSL) {
    const options = {
        key: fs.readFileSync('/usr/local/apache2/conf/private.key'),
        cert: fs.readFileSync('/usr/local/apache2/conf/public.crt'),
    };

    https.createServer(options, app).listen(cdnPort, "0.0.0.0", () => {
        console.log(`Working on port ${cdnPort}`);
    });

    secure_server = https.createServer(options);
    wss = new ws.Server({ server: secure_server });
} else {
    app.listen(cdnPort, "0.0.0.0", () => {
        console.log(`Working on port ${cdnPort}: No Secure`);
    });

    wss = new ws.Server({ port: squarePort }, () => {
        console.log(`Working on port ${squarePort}: No Secure`);
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

/** 이미 uuid가 사용중인지 검토하기 */
function CreateUUIDv4() {
    let clientId = uuidv4();
    let keys = Object.keys(joined_channel);
    if (keys.includes(clientId))
        return CreateUUIDv4();
    return clientId;
}
// 웹 소켓 서버 구성
wss.on('connection', (ws) => {
    let clientId = CreateUUIDv4();
    // 사용자 uuid를 명시하고 모든 사용자에게 브로드캐스트
    ws.on('message', (msg) => {
        try {
            let json = JSON.parse(msg);
            let channel_id = json['channel'] || joined_channel[clientId];
            switch (json['type']) {
                // 사용자에게 새 채널 id를 구성하여 전달
                case 'init':
                    let new_channel_id = uuidv4();
                    let init = {
                        type: 'init_id',
                        id: new_channel_id,
                        uid: clientId,
                    }
                    dedi_client[new_channel_id] = {};
                    ws.send(JSON.stringify(init));
                    return;
                // 게임 채널로 사용하기
                // 인스턴스 게임 서버와 관련된 정보를 저장함
                // 게임 채널은 방장이 존재하지 않음, 모든 사용자가 떠날 때까지 유지된다
                case 'rules':
                    dedi_client[channel_id]['rules'] = json['rules'];
                    break;
                // 광장 채널에서 FFS 우선처리가 된 경우 별도 클라이언트 연결
                case 'override':
                    clientId = json['clientId'];
                // 새로운 사용자 참여
                case 'join':
                    // 참여 예정 채널이 없다면 사용자 아이디로 새 채널 만들기
                    if (!json['channel'])
                        channel_id = clientId;
                    // 이 경우 사용자는 방장으로서 동작한다
                    joined_channel[clientId] = channel_id;
                    if (!dedi_client[channel_id]) {
                        dedi_client[channel_id] = {};
                        console.log('채널 생성: ', channel_id);
                    }
                    if (!dedi_client[channel_id][clientId]) {
                        dedi_client[channel_id][clientId] = {};
                        dedi_client[channel_id][clientId]['ws'] = ws;
                        dedi_client[channel_id][clientId]['name'] = json['name'];
                    }
                    // 게임 채널에 진입했다면 게임 룰을 공유
                    if (dedi_client[channel_id]['rules'])
                        ws.send(JSON.stringify(dedi_client[channel_id]['rules']));
                    json['channel'] = channel_id;
                    { // 진입시 채널 내 사용자에게 현재 총 인원 수를 전파
                        let keys = Object.keys(dedi_client[channel_id]);
                        for (let i = 0, j = keys.length; i < j; i++)
                            dedi_client[channel_id][keys[i]]['ws'].send(JSON.stringify({ count: j }));
                    }
                    break;
                default:
                    break;
            }
            json['uid'] = clientId;
            json = JSON.stringify(json);
            { // 채널 내 메시지 전파
                let keys = Object.keys(dedi_client[channel_id]);
                for (let i = 0, j = keys.length; i < j; i++)
                    dedi_client[channel_id][keys[i]]['ws'].send(json);
            }
        } catch (e) {
            console.error(`json 변환 오류 msg: ${msg}`);
            // 클라이언트에게 메시지 반환
            ws.send('서버에서 받은 메시지: ' + msg);
        }
    });

    // 연결이 종료되었을 때 실행되는 콜백 함수
    ws.on('close', () => {
        // 모든 사용자에게 사용자 나감 전파
        try {
            const channel_id = joined_channel[clientId];
            // 이 서버에 파일을 직접 게시했다면 해당 사용자의 파일 삭제
            fs.readdir('./cdn', (err, files) => {
                console.log(`Remove file with key: /square_${channel_id}_${clientId}`);
                files.forEach(path => {
                    if (path.indexOf(`square_${channel_id}_${clientId}`) >= 0) {
                        console.log(`Remove file: ./cdn/${decodeURIComponent(path)}`);
                        fs.unlink(`./cdn/${path}`, e => {
                            console.error(`Result: Remove file with key: ${decodeURIComponent(path)}: ${e}`);
                        });
                    }
                });
            });
            const catch_name = dedi_client[channel_id][clientId]['name'];
            let keys = Object.keys(dedi_client[channel_id]);
            /** 방장으로 지정된 사람이 탈퇴한 경우 */
            let isHostLeft = channel_id == clientId;
            for (let key of keys)
                // 방장이 나갔다면 모든 사람들 탈퇴처리
                if (isHostLeft) {
                    dedi_client[channel_id][key]['ws'].close();
                } else {
                    // 그게 아니라면 사용자 퇴장 알림처리
                    let count = {
                        uid: clientId,
                        name: catch_name,
                        type: 'leave',
                        count: keys.length,
                    }
                    let msg = JSON.stringify(count);
                    dedi_client[channel_id][key]['ws'].send(msg);
                }
            delete dedi_client[channel_id][clientId];
            delete joined_channel[clientId];
            { // 사용자 퇴장시 모든 사용자에게 현재 총 인원 수를 브로드캐스트
                let keys = Object.keys(dedi_client[channel_id]);
                for (let i = 0, j = keys.length; i < j; i++)
                    dedi_client[channel_id][keys[i]]['ws'].send(JSON.stringify({ count: j }));
                // 사람이 없으면 채널 삭제처리
                if (keys.length < 1) {
                    delete dedi_client[channel_id];
                    console.log('채널 삭제: ', channel_id);
                }
            }
        } catch (e) {
            console.log('사용자 퇴장 오류: ', e);
        }
    });
});

if (UseSSL)
    secure_server.listen(squarePort, () => {
        console.log(`Working on port ${squarePort}`);
    });

// 이 서버를 이용하면 http://localhost:{SitePort} 로 페이지를 이용할 수 있고
// 앱에서 비보안 서버에 접속할 때 기능에 제한 없이 사용할 수 있습니다.
try {
    if (!UseCustomSite) throw '사이트를 운영하지 않기로 설정됨';
    app.use(express.static(path.join(__dirname, './www')));
    app.listen(SitePort, () => {
        console.log(`서버가 http://localhost:${SitePort}에서 실행 중입니다.`);
    });
} catch (e) {
    console.log('사설 사이트 켜기 오류: ', e);
}