"use strict";
//let p1 = new Person(); yoy can't use it before declare it
// As class syntax introduced prototype based inheritance
//Class
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function () {
        console.log(p.greet === Person.prototype.greet);
    };
    return Person;
}());
var p = new Person();
//Person.prototype.greet ();
p.greet();
// Function you can called before or after declaration 
emloyee();
function emloyee() {
}
emloyee();
console.log(typeof Person); //just spl Funtion, Classes unlike function not hoisted 
console.log(typeof p);
//# sourceMappingURL=tut21.js.map