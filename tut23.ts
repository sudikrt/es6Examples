//class inHeritance
class Parent {
    constructor  (name) {
        console.log (`This is from parent class : ${name}`);
    }

    getId () {
        return 10;
    }
}
class Child extends Parent {

    constructor (name) {
        super (name); // extended class must call super class constructor ()
        console.log ('Child contructor');
    }

    getId () {
        console.log (super.getId ());// calling parent method
        return 50;
    }
}

let parentObj = new Child ("Hander"); // if child doesn't have constructor it invokes parent contructor and it takes one arg
console.log (parentObj.getId ()); // calling parent class method  if derived class has method it calls from derived class
