"use strict";
// Destructing object
var empVar = {
    fNameV: "dasrah",
    LNameV: 'GDG',
    Gender: "male"
};
//Make sure each property name match variable name 
var fNameV = empVar.fNameV, LNameV = empVar.LNameV, Gender = empVar.Gender;
console.log(fNameV);
console.log(LNameV);
console.log(Gender);
//Using alias
var f = empVar.fNameV, l = empVar.LNameV, G = empVar.Gender;
console.log(f);
console.log(l);
console.log(G);
//# sourceMappingURL=tut18.js.map