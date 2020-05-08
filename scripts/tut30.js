"use strict";
// Sets
var mSet = new Set();
var ob1 = {};
var ob2 = {};
// restricted to specific type
mSet.add('Hello');
mSet.add(3);
console.log('size ' + mSet.size);
mSet.add(3);
console.log('size ' + mSet.size);
mSet.add(ob1);
console.log('size after ob1 ' + mSet.size);
//because objects are not converted to string the two objects are unique
mSet.add(ob2);
console.log('size after ob2 ' + mSet.size);
// We can initilize while creation 
var newSet = new Set([1, 1, 2, 3, 4, 3, 2, 4]);
console.log(newSet.size);
// you can chain add method
var anotherSet = new Set().add('One').add('2').add('three');
console.log(anotherSet.size);
// check the existence of method we use has method
console.log(anotherSet.has('One'));
console.log(anotherSet.has('2'));
console.log(anotherSet.has(2));
//delete 
console.log(anotherSet.size);
anotherSet.delete('one');
console.log(anotherSet.size);
anotherSet.delete('One');
console.log(anotherSet.size);
//# sourceMappingURL=tut30.js.map