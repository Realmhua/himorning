'use strict'

const crypto = require('crypto');
const verb = 'hello  ';

function greeting(name) {
    console.log(verb + name);
}

function aesEncrypt(data, key) {
    const cipher = crypto.createCipher('aes192', key);
    let crypted = cipher.update(data, 'utf8', 'hex');
    return crypted + cipher.final('hex');
}

function aesDecrypt(encrypted, key) {
    const decipher = crypto.createDecipher('aes192', key);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    return decrypted + decipher.final('utf8');
}

module.exports = {
    greeting,
    aes: {
        aesEncrypt,
        aesDecrypt
    }
};