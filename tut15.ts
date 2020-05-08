let firstName ='Ram';
let lastName = 'Raj';

let person = {
    firstName : firstName,
    lastName : lastName
};
console.log (person);

let personLiteral = {
    firstName,
    lastName
};
console.log (personLiteral);

function createPerson (firstName, lastName, age) {
    let fullName = firstName + " " + lastName;
    return {
        firstName, 
        lastName, 
        fullName,
        isSenior: (() => {
            return age > 60
        })
    };
}

let fulNameVal = createPerson ("Jac", "Cool", 20);
console.log (fulNameVal.firstName);
console.log (fulNameVal.lastName);
console.log (fulNameVal.fullName);
console.log (fulNameVal.isSenior ());



function createPerson1 (firstName, lastName, age) {
    let fullName = firstName + " " + lastName;
    return {
        firstName, 
        lastName, 
        fullName,
        isSenior() {
            return age > 60
        }
    };
}

let fulNameVal1 = createPerson ("Jac", "Cool", 20);
console.log (fulNameVal1.firstName);
console.log (fulNameVal1.lastName);
console.log (fulNameVal1.fullName);
console.log (fulNameVal1.isSenior ());


//space are allowed using quotes 
let ln = "last name";
let personS = {
    "first name" : "Ram",
    [ln] : "Jack"
};
console.log (personS);