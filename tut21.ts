//let p1 = new Person(); yoy can't use it before declare it
// As class syntax introduced prototype based inheritance
//Class
class Person {
    greet () {
        console.log (p.greet === Person.prototype.greet);
    }
}

let p = new Person ();
//Person.prototype.greet ();
p.greet ();
// Function you can called before or after declaration 
emloyee ();
function emloyee () {
     
}
emloyee ();
console.log (typeof Person); //just spl Funtion, Classes unlike function not hoisted 
console.log (typeof p);
