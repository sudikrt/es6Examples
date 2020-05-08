// plain js object are not iterable
// for of loop doesn;t work wiht obj
// let person = {
//     fname : 'Sudarshan',
//     lname : 'Karanth'
// }

// below will now work  without iterator
// for (let p of person ) {
//     console.log (p);
// }

let person = {
    fname : 'Sudarshan',
    lname : 'Karanth'
}

person[Symbol.iterator] = function () {
  let properties  = Object.keys (person);
  let count = 0;
  let isDone = false;
  let next = () => {
    if (count >= properties.length) {
      isDone = true;
    } 
    return {done : isDone, value: this[properties[count++]]};
  }
  return {next}
}
for (let p of person ) {
    console.log (p);
}