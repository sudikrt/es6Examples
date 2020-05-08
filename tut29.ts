// Set and mpas
let mySet = Object.create (null); // null is not to inherit any properties
mySet.id = true;
if (mySet.id) {
    console.log ('Id exists');
}

mySet.id = 1;
if (mySet.id) {
    console.log ('Id exists');
}

mySet.id = 0;
if (mySet.id) {
    console.log ('Id exists');
} else {
    console.log ('Id not exists');
}


// is more than a key value pair
let myMap = Object.create (null);
myMap.val = 'Name';
console.log (myMap.val);

myMap[100] = "Hello"; 
console.log (myMap["100"]); // we are accessing object property as string
                            // object properties can only be as string


let obj1 = {};
let obj2 = {};

myMap[obj1] = 'Test';

// both are results in Test because the string representation of obj1 and obj2 are same
console.log (myMap[obj1]); 

console.log (myMap[obj2]);
