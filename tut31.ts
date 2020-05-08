//week set
let mstSet = new Set ();
let key =  {};
mstSet.add (key);
console.log (mstSet.size);
key = null; // even thought our references to key object is set to null our ref to key obj is still existed
console.log (mstSet.size); 
key = [...mstSet][0];
console.log (key);
// a week set is very much like strong set
// it can store only object ref and not premitive values and obj ref are week
//if all other ref are removed a week set allows garbaje collection


// to create week set 
let weekS = new WeekSet ();
let k = {};
weekS.add (k);
console.log (weekS.size);
key = null;
// here we are unable to verify it 

