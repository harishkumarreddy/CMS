/**
 * Split into blocks
   ex: 
    n = 2 => 1+1,
    n=3 => 1+1+1,
    n= 55 => 27+27+1 && 25+25+5
    n= 56 => 28+28;
 */
/**
 * read input
 * check even/odd
 * split into blocks
 * print the blocks
 */

var input = 59; //Math.floor(Math.random() * 50);
var rem = input % 2;
if (rem === 0) { // check for even
    var even_block = input / 2;
    var output = even_block + " + " + even_block;
    console.log(input, output);
} else { // check for odd
    // ==============
    var halfVal = input / 10
    var myFloor = Math.floor(halfVal);
    var blockVal = myFloor * 10;
    var lastblock = input - blockVal;
    var blocks = blockVal / 2;
    var output = blocks + " + " + blocks + " + " + lastblock;
    console.log(input, output);
    // ==============

    // =============
    var rem2 = input % 10;
    var blockVal = input - rem2;
    var blocks = blockVal / 2;
    var output = blocks + " + " + blocks + " + " + rem2;
    console.log(input, output);
    // =============


    var evenval = input - rem;
    var even_block = evenval / 2;
    var output = even_block + " + " + even_block + " + " + rem;
    console.log(input, output);
}

var n = 89.5356;
console.log(n, Math.abs(n));
console.log(n, Math.round(n));
console.log(n, Math.floor(n));
console.log(n, Math.ceil(n));