//print("Hello World!");

// console.log("Hello World!");
// console.error("Hello World!");
// console.warn("Hello World!");

function print(message, level) {
    if (level == undefined) {
        level = "info"
    }

    switch (level) {
        case "error":
        case "err":
        case "e":
        case 2:
            console.error(message);
            break;

        case "warning":
        case "warn":
        case "w":
        case 1:
            console.warn(message);
            break;

        case "info":
        case "i":
        case 0:
        default:
            console.log(message);
            break;
    }

    return true;
}

print("Hello World!", "i");

var studentsArray = [{
        "name": "Harish",
        "age": 33,
        "phno": "7801070710",
        "email": "mail@email.com"
    },
    {
        "name": "HarishKumar",
        "age": 23,
        "phno": "7801070710",
        "email": "mail@email.com"
    }

];


//add new record to end of the array
// studentsArray.push({
//     "name": "Harish Reddy",
//     "age": 33,
//     "phno": "7801070710",
//     "email": "mail@email.com"
// });

//add new record to top of the array
// studentsArray.unshift({
//     "name": "Harish Reddy",
//     "age": 33,
//     "phno": "7801070710",
//     "email": "mail@email.com"
// });

// remove one from bottom
//var rem = studentsArray.pop();
//console.log(rem);

// var rem = studentsArray.splice(0, 1)
// console.log(rem);

// console.log(studentsArray);

// var filtered = studentsArray.map(function(student) {
//     if (student.age <= 25) {
//         return student
//     }
// });


// console.log(filtered);