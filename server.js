'use strict'

const http = require('http');
const url = require('url');
const path = require('path');
const aes = require('./hello').aes;
const os = require('os');
const uuid = require('uuid');
const process = require('process');
const cluster = require('cluster');
const pug = require('pug');
const fs = require('fs');



let server = http.createServer(function (req, res) {
    let purl = url.parse(req.url);
    //console.log(req.method + ': ' + req.url);
    //console.log(purl);

    if (purl.pathname.toLowerCase().endsWith('.jpg')) {
        res.writeHead(200, {
            'Content-Type': 'image/jpg'
        });
        res.end(fs.readFileSync('.' + purl.pathname));

    } else if (purl.pathname.toLowerCase().endsWith('.ico')) {
        res.writeHead(200, {
            'Content-Type': 'image/ico'
        });
        res.end(fs.readFileSync('.' + purl.pathname));
    } else {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.writeHead(200, {
            'Content-Type': 'text/html;charset=UTF8'
        });

        const cf = pug.compileFile('one.pug');
        let r1 = pug.render('<h1>the sun comes up, it\'s new day dawning</h1>');

        res.write(pug.render('img(src="/img/002.jpg")'));
        res.write(pug.render('img(src="/img/007.jpg")'));
        res.write(pug.render('img(src="/img/025.jpg")'));

        res.write(process.cpuUsage());

        res.write(r1);
        res.end(cf({
            name: '华夏'
        }));
    }
}).listen(8000);
console.log('Server(HTTP) is running at http://127.0.0.1:8000');

process.on('uncaughtException', err => {
    console.log('uncaughtException occur: ' + err.message);
});