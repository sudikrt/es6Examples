//week maps
//  keys can only be obj
// the obj ref are week
// they don;t interfier with garbaje collection
let weekMap = new WeakMap ();
let obj1 =  {};
weekMap.set (obj1, "hello world");
console.log (weekMap.get (obj1));
obj1 = null;
console.log (weekMap.get (obj1));