"use strict";
// plain js object are not iterable
// for of loop doesn;t work wiht obj
// let person = {
//     fname : 'Sudarshan',
//     lname : 'Karanth'
// }
// below will now work  without iterator
// for (let p of person ) {
//     console.log (p);
// }
var person = {
    fname: 'Sudarshan',
    lname: 'Karanth'
};
person[Symbol.iterator] = function () {
    var _this = this;
    var properties = Object.keys(person);
    var count = 0;
    var isDone = false;
    var next = function () {
        if (count >= properties.length) {
            isDone = true;
        }
        return { done: isDone, value: _this[properties[count++]] };
    };
    return { next: next };
};
for (var _i = 0, person_1 = person; _i < person_1.length; _i++) {
    var p_1 = person_1[_i];
    console.log(p_1);
}
//# sourceMappingURL=tut39.js.map