'use strict'

let http = require('http');

let server = http.createServer(function (req, res) {
    console.log(req.method + ': ' + req.url);
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end('<h1>hello, world.</h2>');
});
server.listen(8000);
console.log('Server(HTTP) is running at http://127.0.0.1:8000');