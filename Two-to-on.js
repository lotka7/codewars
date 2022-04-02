"use strict";
exports.__esModule = true;
exports.twoToOne = void 0;
var twoToOne = function (s1, s2) {
    var onlyUnique = function (value, index, self) {
        return self.indexOf(value) === index;
    };
    console.log((s1 + s2).split('').filter(onlyUnique).sort());
    console.log((s1 + s2).split('').filter(onlyUnique).sort().join(''));
    // console.log((s1 + s2).split(''));
    return (s1 + s2).split('').filter(function (value, index, self) {
        return self.indexOf(value) === index;
    }).sort().join('');
};
exports.twoToOne = twoToOne;
