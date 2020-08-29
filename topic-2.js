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


/**
    ->1 leep year,
    ->2 Split into blocks
    n = 2 => 1+1,
    n=3 => 1+1+1,
    n= 55 => 25+25+5;
 */

 var month =( Math.floor(Math.random() * 6));
 var month_string;
 switch (month) {
    case 1:
        month_string = "Jan";
        break;

    case 2:
        month_string = "Feb";
        break;
    
    case 3:
        month_string = "Mar";
        break;

    case 4:
        month_string = "Apr";
        break;
    case 5:
        month_string = "May";
        break;

    case 6:
        month_string = "Jun";
        break;
 
     default:
        month_string = "Invalied Month";
        break;
 }
 console.log(month + " -> " +month_string);

 var quarter_of_month;
 switch (month) {
    case 1:
    case 2:
    case 3:
        quarter_of_month = "Q1";
        break;

    case 4:
    case 5:
    case 6:
        quarter_of_month = "Q2";
        break;
 
     default:
        quarter_of_month = "Month is not in the range of 1 to 6";
        break;
 }
 console.log(month, quarter_of_month);

// this is not recomended to use..
//  switch (month) {
//     case month<=6:
//         quarter_of_month = "1st half";
//            break;

//        case month>6:
//        quarter_of_month = "2nd half";
//            break;

//      default:
//         quarter_of_month = "Month is not in the range of 1 to 6";
//         break;
//  }

// console.log(month + " -> " +quarter_of_month);
