console.log ('demo');
function greetPerson (name) {
    let greet = 'outside'
    if (name === 'raj') {
        let greet = 'Hi Raj';
        console.log (greet);    
    } else {
        let greet = 'Hi ban';
        console.log (greet);
    }
    console.log (greet);
}
greetPerson ('raj');
greetPerson ('da');

var a = 10;
var b = 20;
if (a === 10) {
    var a = 1;
    let b = 2;
    console.log (a);
    console.log (b);
}
console.log (a);
console.log (b);