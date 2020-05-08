"use strict";
//Class body and methods
//in es215 class body contains only menthods not properties (Not in typscript)
var PersonClass = /** @class */ (function () {
    //name;
    //Constructor method
    function PersonClass(name) {
        this.name = name;
        console.log('Constructor invoked');
    }
    //Static method which can be called without instanciating class
    PersonClass.method1 = function () {
        console.log('Thsi is static method');
    };
    PersonClass.prototype.greetPerson = function () {
        console.log("hello " + this.name);
    };
    return PersonClass;
}());
var pObj = new PersonClass("Chandler");
var pStatic = PersonClass.method1();
//console.log (pObj.greetPerson ());
pObj.greetPerson();
//# sourceMappingURL=tut22.js.map