let displayColours = function (message, ...colors) {
    console.log (message);
    console.log (colors);
    console.log (arguments.length);
   for (let i = 0; i < colors.length; i++) {
       console.log (arguments [i]);
   }
}
displayColours ('red', 'black', 'blue');
displayColours ('red', 'black', 'blue', 'green');