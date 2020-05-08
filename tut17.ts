//destructuring array
let personArray = ["Raj", "Karan", "Male"];

//First three elements of the array
let [firsName, LastName, gender] = personArray;

console.log (firsName);
console.log (LastName);
console.log (gender);

//only need the specific position element : can ommit specific element

let [,,ge] = personArray;
console.log (ge);


// Use RES operator to make array
//Single variable for group of elements
let [fName, ...ele] = personArray;
console.log (fName);
console.log (ele);

//We can have default value
let [nameF, nameL, gend="Male"] = ["Damn", "Cool"];
console.log (nameF);
console.log (nameL);
console.log (gend);


let [nameF1, nameL1, gend1="Male"] = ["Damn", "Cool", "Female"];
console.log (nameF1);
console.log (nameL1);
console.log (gend1);
