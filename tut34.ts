let newMap = new Map (
    [
        ['fname', 'Sudarshan'],
        ['lname', 'Karanth']
    ]
);
newMap.forEach ((value, key, callingMap) => {
  console.log  (`${key}=>${value}`);
  console.log (newMap === callingMap);
})

let myNSet = new Set ([1,2,3]);
myNSet.forEach ((value, key, callingSet) => {
  console.log (`${key} => ${value}`);
  console.log (myNSet === callingSet);
})

let myArra = [1,2,3,4];
myArra.forEach ((ele, index, currentArray) => {
  console.log (`${index} => ${ele}`);
  console.log (myArra === currentArray);
})