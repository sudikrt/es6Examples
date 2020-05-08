"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//class inHeritance
var Parent = /** @class */ (function () {
    function Parent(name) {
        console.log("This is from parent class : " + name);
    }
    Parent.prototype.getId = function () {
        return 10;
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name) {
        var _this = _super.call(this, name) || this;
        console.log('Child contructor');
        return _this;
    }
    Child.prototype.getId = function () {
        console.log(_super.prototype.getId.call(this)); // calling parent method
        return 50;
    };
    return Child;
}(Parent));
var parentObj = new Child("Hander"); // if child doesn't have constructor it invokes parent contructor and it takes one arg
console.log(parentObj.getId()); // calling parent class method  if derived class has method it calls from derived class
//# sourceMappingURL=tut23.js.map