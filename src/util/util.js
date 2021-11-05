"use strict";
exports.__esModule = true;
exports.randomId = void 0;
var randomId = function () {
    var str = '1234567890qwertyuiopasdfghjklzxcvbnm';
    var strLength = str.length;
    var ranDomLen = 8;
    var n = '';
    for (var i = 0; i < ranDomLen; i++)
        n += str.charAt(Math.floor(Math.random() * strLength));
    console.log(n);
    return n;
};
exports.randomId = randomId;
