//export let fName =  "Handler";
//export let lName = "Chool";

let dfName = 'DHIIDL';
 let fName =  "Handler";
 let lName = "Chool";
 let obj = {
     name : "ross"
 }
console.log ('moduel b loaded'); // First thsi will loaded 
// Export multiple variable at a time 
 export {fName, lName, obj} 
// instead of doing one by one
export default dfName;

export function greet (msg) {
    console.log (`Hello ${msg}`);
};

export class GreetClass {
    constructor () {
        console.log ('Constructor');
    }
    greet (msg) {
        console.log (`Hello ${msg}`);
    }
}