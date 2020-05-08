"use strict";
// learning built in symbol
// Symbol.iterator
// search as well know symbos for docs
// for..of  --> Must have iterator method --> how do we know ? by symbol.iterator
var str = 'Hello';
var ary = [1, 2, 3];
var numVal = 4;
var objVal = { name: 'Sudarsha' };
console.log('For String :' + typeof str[Symbol.iterator]); // if method exists for the object at this particualr key
// return a method of fun then it can be used with for off loop
// return function
console.log('For String :' + typeof ary[Symbol.iterator]); // return function
console.log('For String :' + typeof numVal[Symbol.iterator]); // return undefiled means we can't use
console.log('For String :' + typeof objVal[Symbol.iterator]); // return undefined means we can't use
//# sourceMappingURL=tut37.js.map