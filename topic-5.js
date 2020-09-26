// Regular functions

// function sum() {
//     var x = 10;
//     var y = 10;
//     var z = x + y;
//     console.log("Sum is: ", z);
// }

function sum(x, y) {
    var z = x + y;
    console.log("Sum is: ", z);
}

sum(1, 1);
sum(10, 2);
sum(5, 5);
sum((1 + 20 - 100 + 56 + 20 * 0.3), 10);
sum("10", "10");
sum("Harish", "Kumar");


/**
 * String encryption function
 *  ABC
 *  A : 96 +3= 99 : D
 * 
 * @param {any text} text 
 */

function encript(text) {
    var output = "";
    for (var i = 0; i < text.length; i++) {
        var asci = text[i].charCodeAt();
        output += String.fromCharCode(asci + 3);
    }

    return output;
}

/**
 * Decrypt the encripted string
 * @param {any thext} text : is encrypted string
 */
function decript(text) {
    var output = "";
    for (var i = 0; i < text.length; i++) {
        var asci = text[i].charCodeAt();
        output += String.fromCharCode(asci - 3);
    }

    return output;
}

// taking new password
var myPassword = "Welcome@123_Zz";

// encryptiing password
var converted_string = encript(myPassword);

//decrypting encrypted password
var decoded_string = decript(converted_string);


//Print all on the screen
console.log(myPassword, converted_string, decoded_string);

//========================================================================================

// Closers / Call Backs

// var getFullname = "harishkumar";

var getFullname = function(firstaNme, midileName, lastName) {
    return firstaNme + " " + midileName + " " + lastName;
};

var fullname = getFullname("Harish", "Kumar", "Reddy");

console.log(fullname);

//call back
var abc = ["a", "b", "c"];
abc.forEach(function(v, i) {
    console.log(i, v);
    console.log(encript(v));
});