// variables and data typs
var myName = "Harishkumar";
var age = 33;
var height = 5.9;
var email = "harishlimarreddy.cherla@gmail.com";
var DoB = new Date('jun-02-1986');

// Reading values and concatinaing 
console.log("Name: " + myName);
console.log("Age: " + age);
console.log("Height: " + height);
console.log("Email: " + email);
console.log("DOB: " + DoB);

// Operators
var A;
var B;

A = 3;
B = 2;
var C = A+B;

console.log("Add: " + (A+B));
console.log("Sub: " + (A-B));
console.log("Mul: " + (A*B));
console.log("Dev: " + (A/B));
console.log("Mod: " + (A%B));

// ================================
/* 
    a = 2
    b = 3
   =======
    a = 3
    b = 2
 */

 var a = -10;
 var b = 0;

 var c = a;
 a=b;
 b=c;

 console.log("a : " + a);
 console.log("b : " + b);
         //  a  b
a = a+b; // 200+30 = 230;
b = a-b; // 230-30 = 200;
a = a-b; // 230-200 = 30;

//
