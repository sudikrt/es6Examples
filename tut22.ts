//Class body and methods
//in es215 class body contains only menthods not properties (Not in typscript)
class PersonClass {
    //name;
    //Constructor method
    constructor (name) {
        this.name  = name;
        console.log ('Constructor invoked');
    }

    //Static method which can be called without instanciating class
    static method1 () {
        console.log ('Thsi is static method');
    }

    greetPerson () {
        console.log (`hello ${this.name}`);
    }
}
let pObj = new PersonClass ("Chandler");
let pStatic = PersonClass.method1 ();
//console.log (pObj.greetPerson ());
pObj.greetPerson ();