//Simple array
//indexes:  0, 1,  2,   3
var arr1 = [1, 2, "A", "b"];
var student = ["harishkumar", 33, "7801070710", "mail.email.com"];

console.log(arr1);
console.log(arr1[2]);
console.log(student[0]);

//2D array
//indexes:   row x col
var arr2 = [
    ["01", "02", "0a", "0b"],
    ["11", "12", "1a", "1b"],
    ["21", "22", "2a", "2b"],
]
console.log(arr2);
console.log(arr2[0]);
console.log(arr2[0][0]);
console.log(arr2[2][3]);


// N level array
var arr3 = [
    [1, 2, "a", "b"],
    [ // 1
        1,
        2,
        "a",
        "b", [ // 4
            1,
            2,
            "a",
            "b", [ //4
                1,
                2,
                "i am nth val", // 2
                "b"
            ]
        ]
    ],
    [1, 2, "a", "b"]
];

console.log(arr3[1][4][4][2]);


//Object
var stu = {
    "htno_001": {
        "name": "Harish",
        "age": 33,
        "phno": "7801070710",
        "email": "mail@email.com"
    },
    "htno_002": {
        "name": "Harish",
        "age": 33,
        "phno": "7801070710",
        "email": "mail@email.com"
    }
}

console.log(stu.htno_001.name);
console.log(stu["htno_001"]);

//Json
var students = [{
        "name": "Harish",
        "age": 33,
        "phno": "7801070710",
        "email": "mail@email.com"
    },
    {
        "name": "Harishkumar",
        "age": 33,
        "phno": "7801070710",
        "email": "mail@email.com"
    },
    {
        "name": "Harish",
        "age": 33,
        "phno": "7801070710",
        "email": "mail@email.com"
    },
    {
        "name": "Harish",
        "age": 33,
        "phno": "7801070710",
        "email": "mail@email.com"
    },
    {
        "name": "Harish",
        "age": 33,
        "phno": "7801070710",
        "email": "mail@email.com"
    }
];

console.log(students[1].name);


//additional stuf

var name = "HarishKumar";
console.log(name[5]);