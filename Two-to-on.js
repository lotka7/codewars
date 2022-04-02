"use strict";
exports.__esModule = true;
exports.twoToOne = void 0;
var twoToOne = function (s1, s2) {
    var concatenatedString = s1.concat(s2);
    console.log(concatenatedString);
    var stringArray = concatenatedString.split('').sort();
    var findDuplicates = stringArray.filter(function (item, index) { return stringArray.indexOf(item) != index; });
    console.log(stringArray);
    console.log(findDuplicates);
    // return total;
};
exports.twoToOne = twoToOne;
