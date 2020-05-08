"use strict";
//iterable and iterator
// iterable any object that implements a method whose key symbol.iterator method
// this method return iteraor
// Iterable {
//     [Symbol.Iterator] () : Iterator 
// }
// //Iterator is an object which is going to implemetn next method it returns an object
// Iterator {
//     next () : IResultObj
// }
// IRsultObj {
//     value : any // actual value with in the collection
//     done : Boolan // indicates if iteration complete or incoplete 
// }
var iterable = [1, 2, 3];
function createIterator(ary) {
    var count = 0;
    return {
        next: function () {
            return count < ary.length ?
                {
                    value: ary[count++], done: false
                }
                : { value: undefined, done: true };
        }
    };
}
var myIterator = createIterator(iterable);
console.log(myIterator.next()); // 1
console.log(myIterator.next()); // 2
console.log(myIterator.next()); // 3
console.log(myIterator.next()); // undefined since it reached end of arrray
//# sourceMappingURL=tut38.js.map