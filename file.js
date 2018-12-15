'use strict'

let fs = require('fs');

let rs = fs.createReadStream('README.MD', 'utf-8');
rs.on('data', function (chunk) {
    console.log('DATA: ' + chunk);
});
rs.on('end', function () {
    console.log('END');
});
rs.on('error', function (err) {
    console.log('ERROR: ' + err);
});

fs.readFile('README', 'utf-8', (err, data) => {
    //console.log(typeof (err));
    // console.log(data);
});

fs.stat('README', (err, stat) => {
    // console.log(stat);
});
