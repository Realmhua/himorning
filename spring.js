'use strict'

let greeting = require('./hello');
let pug = require('pug');

console.log('hello world');
greeting('Alfred');

process.nextTick(() => console.log('nexttick callback'));
console.log('what\' your name');

const cf = pug.compileFile('one.pug');
console.log(cf({
    name: '华夏'
}));

console.log(pug.renderFile('one.pug', {
    name: '函谷关'
}));

pug.render('the sun comes up, it\'s new day dawning');

process.on('exit', code => {
    console.log('about to exit with code: ' + code)
});