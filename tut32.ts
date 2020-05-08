// Maps
// key value pair
// set type manage a list of value
// some sort of association b/w values and info then we need maps
// Map is order list of key value pair
// Maps key and value of any type
//unlike object the type of property us always String


let myMap = new Map ();
myMap.set ('fname', 'sudarshan');
myMap.set ('age', 20);

console.log (myMap.get ('fname'));
console.log (myMap.get ('age'));

let o1 = {};
let o2 = {};

myMap.set (o1, 10);
myMap.set (o2, 20);

console.log (myMap.get (o1));
console.log (myMap.get (o2));
console.log (myMap.size);
console.log (`has fname ${myMap.has ('fname')}`);
myMap.delete ('fname');
console.log (`has fname ${myMap.has ('fname')}`);



