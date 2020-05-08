"use strict";
var _a;
var firstName = 'Ram';
var lastName = 'Raj';
var person = {
    firstName: firstName,
    lastName: lastName
};
console.log(person);
var personLiteral = {
    firstName: firstName,
    lastName: lastName
};
console.log(personLiteral);
function createPerson(firstName, lastName, age) {
    var fullName = firstName + " " + lastName;
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: fullName,
        isSenior: (function () {
            return age > 60;
        })
    };
}
var fulNameVal = createPerson("Jac", "Cool", 20);
console.log(fulNameVal.firstName);
console.log(fulNameVal.lastName);
console.log(fulNameVal.fullName);
console.log(fulNameVal.isSenior());
function createPerson1(firstName, lastName, age) {
    var fullName = firstName + " " + lastName;
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: fullName,
        isSenior: function () {
            return age > 60;
        }
    };
}
var fulNameVal1 = createPerson("Jac", "Cool", 20);
console.log(fulNameVal1.firstName);
console.log(fulNameVal1.lastName);
console.log(fulNameVal1.fullName);
console.log(fulNameVal1.isSenior());
//space are allowed using quotes 
var ln = "last name";
var personS = (_a = {
        "first name": "Ram"
    },
    _a[ln] = "Jack",
    _a);
console.log(personS);
//# sourceMappingURL=tut15.js.map