"use strict";
var employee = {
    id: 1,
    greet: function () {
        var _this = this;
        var self = this;
        setTimeout(function () { console.log(_this.id); }, 1000);
    }
};
employee.greet();
//# sourceMappingURL=tut11.js.map