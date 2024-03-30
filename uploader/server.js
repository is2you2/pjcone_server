/** Define dependencies.*/

var cors = require('cors')
var express = require("express");
var multer = require('multer');
var app = express();
var done = false;
const https = require('node:https');
const fs = require('node:fs');

app.use(cors());

/** Express Timeout Setting 10 minutes */
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

/** Configure the multer.*/
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


/** Rendering upload form with simple html */
function displayForm(req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    res.write(
        '<div><h3>Plain HTML Upload</h3></div>' +
        '<div>' +
        '<form action="/v1/upload" method="post" enctype="multipart/form-data">' +
        '<input type="file" name="file"> ' +
        '<input type="submit" value="Upload">' +
        '</form>' +
        '</div>'
    );
    res.end();
};


/** Handling routes.*/

/* root */
app.get('/', displayForm);

/* process uploaded file(s) */
app.post('/v1/upload', function (req, res) {
    console.log("/v1/upload called.");
    if (done == true) {
        console.log("Attached: " + JSON.stringify(req.files));
        res.write('<p>Successfully uploaded.</p><p><a href="/">Next upload</a></p>');
        res.end();
    };
});

const options = {
    key: fs.readFileSync('/usr/local/apache2/conf/private.key'),
    cert: fs.readFileSync('/usr/local/apache2/conf/public.crt'),
};

https.createServer(options, app).listen(9001, "0.0.0.0", () => {
    console.log("Working on port 9001");
});

/** Run the server.*/
// app.listen(9001, "0.0.0.0", function () {
//     console.log("Working on port 9001");
// });