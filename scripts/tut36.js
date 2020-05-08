"use strict";
//symbols
// to generate unique id but we never get acces to those 
var _a;
// how to create new symbole
var s = Symbol("First symbol"); // description 
console.log(typeof s);
console.log(s.toString());
var s2 = Symbol();
var s3 = Symbol();
console.log(s2 === s3); // false symbol always create unique id
var s4 = Symbol("Test");
var s5 = Symbol("Test");
console.log(s4 === s5); // false symbol always create unique id
var s6 = Symbol.for('RegSymbol'); // check if RegSymbol exists in registry if it does it will return if not it will create new one
var s7 = Symbol.for('RegSymbol');
console.log(s6 === s7);
console.log(Symbol.keyFor(s7)); // key for symbol
// create unique id
// good place to use is in object proprties
// 
var fname = Symbol();
var personOb = (_a = {},
    _a[fname] = 'Sudarshan',
    _a);
console.log(Object.getOwnPropertyNames(personOb)); // we will not get  fname details
console.log(Object.getOwnPropertySymbols(personOb));
//# sourceMappingURL=tut36.js.map