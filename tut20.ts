//Use of for of loops with array and str
let colors  = ['Red', 'Blue', 'Green'];

//Normally we do like this
for (let i = 0; i < colors.length; i++) {
    console.log (colors [i]);
}

// with help of for of loop we can read the elements
for (let color of colors) {
    console.log (color);
}

let letters = 'Hellow';
for (let letter of letters) {
    console.log (letter);
}