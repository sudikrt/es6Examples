let getValue = function (val=4, bon=4) {
    console.log (val*bon);
    console.log (arguments.length);
}
getValue (2, 4);
getValue ();
getValue (1);
getValue (undefined, 2);