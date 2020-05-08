//two types of export 
// 1. Named
// 2. Default
console.log ('module A load 1'); // display second
import {fName, lName, obj} from './moduleB.js'; // import is hoiseted to top display first 
console.log ('module A load 2'); // display thirs
console.log (` ${fName} ${lName}`);

//import are read only
//fName = "test"; // throws a errro

console.log (obj.name);
//But you can change the proprty of an object
obj.name = "joy";
console.log (obj.name);

// yoou can provide alias
// When you use alias you must refer alias instead of original name

import {fName as f, lName as l} from './moduleB.js';
console.log (`${f} ${l}`);

import defaultFirst from './moduleB.js'; // no need of curly braces
console.log (defaultFirst);

import {default as df} from './moduleB.js'; // You can alias on using curly braces  using default key word
console.log (df);

import {greet, GreetClass} from './moduleB.js';
greet ('Raj');
new GreetClass ().greet ('Man');
//console.log ();