'use strict'

const http = require('http');
const url = require('url');
const path = require('path');
const aes = require('./hello').aes;

let va = 12;
console.log('alf');
let v2 = 5;
console.log(v2);

function func1() {
    var v4 = 20;
    if (1 > 3) {
        var v3 = 7;
    }
    console.log(typeof v3);
    console.log('v3: ' + v3);
    console.log('v4: ' + v4);
}
func1();
console.log('<<<<<v4: ' +typeof v4);

// let server = http.createServer(function (req, res) {
//     console.log(req.method + ': ' + req.url);
//     console.log(url.parse(req.url));
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     });
//     res.end('<h1>hello, world.</h2>');
// });
// server.listen(8000);
// console.log('Server(HTTP) is running at http://127.0.0.1:8000');