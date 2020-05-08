"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
//week set
var mstSet = new Set();
var key = {};
mstSet.add(key);
console.log(mstSet.size);
key = null; // even thought our references to key object is set to null our ref to key obj is still existed
console.log(mstSet.size);
key = __spreadArrays(mstSet)[0];
console.log(key);
// a week set is very much like strong set
// it can store only object ref and not premitive values and obj ref are week
//if all other ref are removed a week set allows garbaje collection
// to create week set 
var weekS = new WeekSet();
var k = {};
weekS.add(k);
console.log(weekS.size);
key = null;
// here we are unable to verify it 
//# sourceMappingURL=tut31.js.map