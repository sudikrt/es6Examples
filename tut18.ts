// Destructing object
let empVar ={
    fNameV : "dasrah",
    LNameV : 'GDG',
    Gender : "male"
};

//Make sure each property name match variable name 
let {fNameV, LNameV, Gender} = empVar;

console.log (fNameV);
console.log (LNameV);
console.log (Gender);

//Using alias
let {fNameV : f, LNameV : l, Gender : G} = empVar;
console.log (f);
console.log (l);
console.log (G);
