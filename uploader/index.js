/** Define dependencies.*/

var cors = require('cors')
var express = require("express");
var multer = require('multer');
var app = express();
var done = false;
const https = require('node:https');
const fs = require('node:fs');
const ws = require('ws');
const { v4: uuidv4 } = require('uuid');

// multer 활용 페이지 구성
app.use(cors());

app.use(function (req, res, next) {
    res.setTimeout(600000, function () {
        console.log('Request has timed out.');
        res.send(408);
    });
    next();
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Method", "*");
    next();
});

app.use(multer({
    dest: './cdn/',

    rename: function (fieldname, filename) {
        return filename;
    },
    onFileUploadStart: function (file) {
        console.log(file.originalname + ' is starting ...')
    },
    onFileUploadComplete: function (file) {
        console.log(file.fieldname + ' uploaded to ' + file.path)
        done = true;
    }
}));

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

// 이 아래부터는 사설 그룹채팅 서버 구성
const secure_server = https.createServer(options, (req, res) => { });
const wss = new ws.Server({ secure_server });

// const wss = new ws.Server({ port: 12013 }, () => {
//     console.log("Working on port 12013: No Secure");
// });


/** 사설 그룹채팅 클라이언트 맵
 * dedi_client[pid] = { ws, name };
 */
const dedi_client = {};

// 웹 소켓 서버 구성
wss.on('connection', (ws) => {
    const clientId = uuidv4();
    dedi_client[clientId] = {};
    dedi_client[clientId]['ws'] = ws;

    { // 진입시 모든 사용자에게 현재 총 인원 수를 브로드캐스트
        let keys = Object.keys(dedi_client);
        for (let i = 0, j = keys.length; i < j; i++)
            dedi_client[keys[i]]['ws'].send(JSON.stringify({ count: j }));
    }
    // 사용자 uuid를 명시하고 모든 사용자에게 브로드캐스트
    ws.on('message', (msg) => {
        try {
            let json = JSON.parse(msg);
            if (json['type'] == 'join') {
                dedi_client[clientId]['ws'] = ws;
                dedi_client[clientId]['name'] = json['name'];
            }
            json['uid'] = clientId;
            json = JSON.stringify(json);
            { // 메시지 브로드캐스트
                let keys = Object.keys(dedi_client);
                for (let i = 0, j = keys.length; i < j; i++)
                    dedi_client[keys[i]]['ws'].send(json);
            }
        } catch (e) {
            console.error(`json 변환 오류_${msg}: ${e}`);
        }
        // 클라이언트에게 메시지 전송
        ws.send('서버에서 받은 메시지: ' + msg);
    });

    // 연결이 종료되었을 때 실행되는 콜백 함수
    ws.on('close', () => { // 모든 사용자에게 사용자 나감 브로드캐스트
        let catch_name = dedi_client[clientId]['name'];
        delete dedi_client[clientId];
        let keys = Object.keys(dedi_client);
        let count = {
            uid: clientId,
            name: catch_name,
            type: 'leave',
            count: keys.length,
        }
        let msg = JSON.stringify(count);
        for (let i = 0, j = keys.length; i < j; i++)
            dedi_client[keys[i]]['ws'].send(msg);
    });
});

secure_server.listen(12013, () => {
    console.log("Working on port 12013");
});