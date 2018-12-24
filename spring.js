'use strict'

let greeting = require('./hello').greeting;

greeting('Alfred');

process.nextTick(() => console.log('nexttick callback'));

process.on('exit', code => {
    console.log('about to exit with code: ' + code)
});
