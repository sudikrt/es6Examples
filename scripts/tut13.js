"use strict";
var displayColours = function (message) {
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
displayColours('red', 'black', 'blue');
displayColours('red', 'black', 'blue', 'green');
//# sourceMappingURL=tut13.js.map