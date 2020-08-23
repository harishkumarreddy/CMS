var x, y;
x = 10;
y = 2;

//simple if
if( x == y )
{ 
    console.log("x is equle to y");
}

if( 10 <= 20){
    console.log("10 is equle to 20");
}

// if..else

if( x == y ){ 
    console.log("x is equle to y");
} else {
    console.log("x is not equle to y");
}

// if..else if... else
var gender;

gender = "";
if(gender == "m"){
    console.log("Gender is male");
} else if(gender == "f"){
    console.log("Gender is female");
}else{
    console.log("Gender is other");
}

//nested if
var age = "70";
 
if (age != ""){
    if(age <=12){
        console.log("Children");
    } else if(age >12 && age <=19){
        console.log("Teen age");
    } else if(age >20 && age <=60){
        console.log("Adult");
    }else{
        console.log("Sr Citizen");
    }
} else{
    console.error("Age is required")
}

var n = 10;
var m = "10";

if(n == m && n === m){
    console.log("both are equle"); 
}else{
    console.log("both are !equle"); 
}

if(n === m || n == m){
    console.log("both are equle datayps and values");  
}else{
    console.log("both are !equle datayps and values"); 
}


// finding the given number is odd or even
var myNumber = -3;
var r = myNumber % 2;
if( r == 0){
    console.log(myNumber + " is even number.");
}else{
    console.log(myNumber + " is odd number.")
}
