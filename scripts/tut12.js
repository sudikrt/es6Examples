"use strict";
var getValue = function (val, bon) {
    if (val === void 0) { val = 4; }
    if (bon === void 0) { bon = 4; }
    console.log(val * bon);
    console.log(arguments.length);
};
getValue(2, 4);
getValue();
getValue(1);
getValue(undefined, 2);
//# sourceMappingURL=tut12.js.map