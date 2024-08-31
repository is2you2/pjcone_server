/** Define dependencies.*/

var cors = require('cors')
var express = require("express");
var multer = require('multer');
var app = express();
const https = require('node:https');
const fs = require('node:fs');
const ws = require('ws');
const { v4: uuidv4 } = require('uuid');

// multer 활용 페이지 구성
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


const options = {
    key: fs.readFileSync('/usr/local/apache2/conf/private.key'),
    cert: fs.readFileSync('/usr/local/apache2/conf/public.crt'),
};

https.createServer(options, app).listen(9001, "0.0.0.0", () => {
    console.log("Working on port 9001");
});

// app.listen(9001, "0.0.0.0", () => {
//     console.log("Working on port 9001: No Secure");
// });

const secure_server = https.createServer(options);
const wss = new ws.Server({ server: secure_server });

// const wss = new ws.Server({ port: 12013 }, () => {
//     console.log("Working on port 12013: No Secure");
// });


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
                case 'init': // 사용자에게 새 채널 id를 구성하여 전달
                    let new_channel_id = uuidv4();
                    let init = {
                        type: 'init_id',
                        id: new_channel_id,
                        uid: clientId,
                    }
                    dedi_client[new_channel_id] = {};
                    ws.send(JSON.stringify(init));
                    return;
                // 광장 채널에서 FFS 우선처리가 된 경우 별도 클라이언트 연결
                case 'override':
                    clientId = json['clientId'];
                case 'join': // 새로운 사용자 참여
                    // 참여 예정 채널이 없다면 사용자 아이디로 새 채널 만들기
                    if (!json['channel'])
                        channel_id = clientId;
                    joined_channel[clientId] = channel_id;
                    if (!dedi_client[channel_id])
                        dedi_client[channel_id] = {};
                    if (!dedi_client[channel_id][clientId])
                        dedi_client[channel_id][clientId] = {};
                    dedi_client[channel_id][clientId]['ws'] = ws;
                    dedi_client[channel_id][clientId]['name'] = json['name'];
                    json['channel'] = channel_id;
                    { // 진입시 모든 사용자에게 현재 총 인원 수를 브로드캐스트
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
            { // 메시지 브로드캐스트
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
    ws.on('close', () => { // 모든 사용자에게 사용자 나감 브로드캐스트
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
            let count = {
                uid: clientId,
                name: catch_name,
                type: 'leave',
                count: keys.length,
            }
            let msg = JSON.stringify(count);
            /** 방장으로 지정된 사람이 탈퇴한 경우 */
            let isHostLeft = channel_id == clientId;
            for (let i = 0, j = keys.length; i < j; i++)
                // 방장이 나갔다면 모든 사람들 탈퇴처리
                if (isHostLeft) {
                    dedi_client[channel_id][keys[i]]['ws'].close();
                } else dedi_client[channel_id][keys[i]]['ws'].send(msg);
            delete dedi_client[channel_id][clientId];
            delete joined_channel[clientId];
            { // 사용자 퇴장시 모든 사용자에게 현재 총 인원 수를 브로드캐스트
                let keys = Object.keys(dedi_client[channel_id]);
                for (let i = 0, j = keys.length; i < j; i++)
                    dedi_client[channel_id][keys[i]]['ws'].send(JSON.stringify({ count: j }));
                if (keys.length < 1) delete dedi_client[channel_id];
            }
        } catch (e) {
            console.log('사용자 퇴장 오류: ', e);
        }
    });
});

secure_server.listen(12013, () => {
    console.log("Working on port 12013");
});