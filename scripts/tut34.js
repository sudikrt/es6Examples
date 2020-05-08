"use strict";
var newMap = new Map([
    ['fname', 'Sudarshan'],
    ['lname', 'Karanth']
]);
newMap.forEach(function (value, key, callingMap) {
    console.log(key + "=>" + value);
    console.log(newMap === callingMap);
});
var myNSet = new Set([1, 2, 3]);
myNSet.forEach(function (value, key, callingSet) {
    console.log(key + " => " + value);
    console.log(myNSet === callingSet);
});
var myArra = [1, 2, 3, 4];
myArra.forEach(function (ele, index, currentArray) {
    console.log(index + " => " + ele);
    console.log(myArra === currentArray);
});
//# sourceMappingURL=tut34.js.map