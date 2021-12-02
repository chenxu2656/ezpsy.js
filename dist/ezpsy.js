'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ezpsy_js = require('src/ezpsy.js');



Object.keys(ezpsy_js).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return ezpsy_js[k]; }
	});
});
