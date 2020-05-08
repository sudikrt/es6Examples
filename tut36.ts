//symbols
// to generate unique id but we never get acces to those 

// how to create new symbole
let s = Symbol ("First symbol"); // description 
console.log (typeof s);
console.log (s.toString ());


let s2 = Symbol ();
let s3 = Symbol ();
console.log (s2===s3); // false symbol always create unique id

let s4 = Symbol ("Test");
let s5 = Symbol ("Test");
console.log (s4===s5); // false symbol always create unique id


let s6 =Symbol.for ('RegSymbol'); // check if RegSymbol exists in registry if it does it will return if not it will create new one
let s7 = Symbol.for ('RegSymbol');
console.log (s6===s7);


console.log (Symbol.keyFor(s7)); // key for symbol
// create unique id
// good place to use is in object proprties
// 
let fname = Symbol ();
let personOb = {
  [fname] : 'Sudarshan'
};
console.log (Object.getOwnPropertyNames (personOb)); // we will not get  fname details
console.log (Object.getOwnPropertySymbols(personOb));

