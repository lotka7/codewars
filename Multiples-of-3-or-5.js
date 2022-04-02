"use strict";
exports.__esModule = true;
exports.multiple = void 0;
var multiple = function (num) {
    var total = 0;
    for (var i = 0; i < num; i++) {
        total += (i % 5 === 0 || i % 3 === 0) ? i : 0;
    }
    return total;
};
exports.multiple = multiple;
