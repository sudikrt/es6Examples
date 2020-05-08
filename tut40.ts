// generator new function in es2015
// specifical type of function  whcih can be paused in the middle of execution and run some code and then resume the same function from where we left off
// the pausing of execuition is possible with help of yield keyword
function *createGenetator () {
    yield 1;
    console.log ('After 1st  yield');
    yield 2;
}

let myGen = createGenetator (); /// provide reference
console.log (myGen.next ()); // stops at first yield // to invoke we need to call next method // {value: 1, done: false}
console.log (myGen.next ()); // stops at secodn yield  //After 1st  yield //{value: 2, done: false}
console.log (myGen.next ()); // identifies no more yield // {value: undefined, done: true}
// we can simplify the code for custom iterator for object with generator
// 

let person = {
  fname :'Sudarshan',
  lname : 'Karanth'
};
person[Symbol.iterator] = function*() {
  let properties = Object.keys(person);
  for (let t of properties) {
    yield this[t]; // kesy like fname, lname
  }
};
for (let p of person ) {
    console.log (p);
}