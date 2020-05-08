"use strict";
//destructuring array
var personArray = ["Raj", "Karan", "Male"];
//First three elements of the array
var firsName = personArray[0], LastName = personArray[1], gender = personArray[2];
console.log(firsName);
console.log(LastName);
console.log(gender);
//only need the specific position element : can ommit specific element
var ge = personArray[2];
console.log(ge);
// Use RES operator to make array
//Single variable for group of elements
var fName = personArray[0], ele = personArray.slice(1);
console.log(fName);
console.log(ele);
//We can have default value
var _a = ["Damn", "Cool"], nameF = _a[0], nameL = _a[1], _b = _a[2], gend = _b === void 0 ? "Male" : _b;
console.log(nameF);
console.log(nameL);
console.log(gend);
var _c = ["Damn", "Cool", "Female"], nameF1 = _c[0], nameL1 = _c[1], _d = _c[2], gend1 = _d === void 0 ? "Male" : _d;
console.log(nameF1);
console.log(nameL1);
console.log(gend1);
//# sourceMappingURL=tut17.js.map