'use strict'

const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const express = require('express');

/*
let root = path.resolve(process.argv[2] || '.');
console.log('Static root dir: ' + root);
let server = http.createServer(function (req, res) {
    let pathname = url.parse(req.url).pathname;
    let filepath = path.join(root, pathname);
    fs.stat(filepath, function (err, stats) {
        if (!err && stats.isFile) {
            console.log('200 ' + req.url);
            res.writeHead(200);
            fs.createReadStream(filepath).pipe(res);
        } else {
            console.log('404 ' + req.url);
            res.writeHead(404);
            res.end('404 not found');
        }
    });
});
server.listen(8000);
console.log('Server(HTTP) is running at http://127.0.0.1:8000');
*/

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, world!');
})
app.listen(8000, () => {
    console.log(`Example app listening on port 8000`);
})
