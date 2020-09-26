var name = "Harish Reddy 32";
console.log("Default: ", name);
console.log("Uppercase: ", name.toUpperCase());
console.log("Lowercase: ", name.toLowerCase());

// to array;
console.log("To Array: ", name.split());
console.log("To Array with '': ", name.split(""));
console.log("To Array with ' ': ", name.split(" "));

// get type
console.log("data type: ", typeof(name));

var n = 10;
var m = "10";

// find the position of a char
var i = name.indexOf("z");
console.log("char position: ", i);

var s = name.search("dd");
console.log("char position: ", s);

var ss1 = name.substring(1, 5);
console.log("letters between ind 2 to 5: ", ss1);
var ss2 = name.substr(1, 5);
console.log("3letters from ind2: ", ss2);

//Replace
var str_replace = name.replace(" ", "-");
console.log("replace ' ' with '-': ", str_replace);

var str_replace = name.replace(/ /g, "@");
console.log("replace ' ' with '-': ", str_replace);

// reverse
//console.log("rreverce: ", name.reverse())