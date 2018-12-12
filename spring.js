'use strict'

var greeting = require('./hello');

console.log('hello world');
greeting('Alfred');

process.nextTick(() => console.log('nexttick callback'));
console.log('what\' your name');

let fs = require('fs');
fs.readFile('README', 'utf-8', (err, data) => {
    console.log(typeof (err));
    console.log(data);
});

fs.stat('README', (err, stat) => {
    console.log(stat);
});

process.on('exit', code => {
    console.log('about to exit with code: ' + code)
});