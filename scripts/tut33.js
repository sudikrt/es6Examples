"use strict";
var newMap = new Map([
    ['fname', 'Sudarshan'],
    ['lname', 'Karanth']
]);
for (var _i = 0, _a = newMap.keys(); _i < _a.length; _i++) {
    var key_1 = _a[_i];
    console.log("key -> " + key_1);
}
for (var _b = 0, _c = newMap.values(); _b < _c.length; _b++) {
    var value = _c[_b];
    console.log("value -> " + value);
}
for (var _d = 0, _e = newMap.entries(); _d < _e.length; _d++) {
    var entry = _e[_d];
    console.log(entry[0] + " -> " + entry[1]);
}
for (var _f = 0, _g = newMap.entries(); _f < _g.length; _f++) {
    var _h = _g[_f], key_2 = _h[0], value = _h[1];
    console.log(key_2 + " -> " + value);
}
//# sourceMappingURL=tut33.js.map