let displayColours1 = function (message, ...colors) {
    console.log (message);
    console.log (colors);
    console.log (arguments.length);
   for (let i = 0; i < colors.length; i++) {
       console.log (arguments [i]);
   }
}
displayColours1 ('red', 'black', 'blue');
displayColours1 ('red', 'black', 'blue', 'green');

let indiAry = ["brown", "pink", 'yello'];
displayColours1 ('Sample Message', ...indiAry);