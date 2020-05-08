"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var displayColours1 = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log(colors);
    console.log(arguments.length);
    for (var i = 0; i < colors.length; i++) {
        console.log(arguments[i]);
    }
};
displayColours1('red', 'black', 'blue');
displayColours1('red', 'black', 'blue', 'green');
var indiAry = ["brown", "pink", 'yello'];
displayColours1.apply(void 0, __spreadArrays(['Sample Message'], indiAry));
//# sourceMappingURL=tut14.js.map