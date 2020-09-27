var students = {
    data: [],
    addStudent: function(stuName, age, phno) {
        this.data.push({
            "name": stuName,
            "age": age,
            "Phone": phno
        });
    },
    getOne: function(filter) {
        //console.log("type of input filter: ", typeof filter);
        if (typeof filter != "object") {
            console.log("Invalied query");
            return true;
        }
        //console.log("input filter: ", filter);

        var output = [];
        var filterKeys = Object.keys(filter);
        //console.log("keys in input filter: ", filterKeys);

        this.data.forEach(function(student, i) {
            //console.log("Student" + i + ": ", student);
            var getThis = false;
            filterKeys.forEach(function(key) {
                //console.log("Student verifier: student[" + key + "]: ", student[key]);
                //console.log("Student verifier: filter[" + key + "]: ", filter[key]);
                if (student[key] == filter[key]) {
                    getThis = true;
                } else {
                    getThis = false;
                    return false
                }
            });
            //console.log("can i get this?: ", getThis);
            if (getThis === true) {
                output.push(student);
                getThis = false;
            }
        });

        console.log(output);
    },
    delete: function(filter) {
        //console.log("type of input filter: ", typeof filter);
        if (typeof filter != "object") {
            console.log("Invalied query");
            return true;
        }
        //console.log("input filter: ", filter);

        var filterKeys = Object.keys(filter);
        //console.log("keys in input filter: ", filterKeys);

        this.data.forEach(function(student, i) {
            //console.log("Student" + i + ": ", student);
            var getThis = false;
            filterKeys.forEach(function(key) {
                //console.log("Student verifier: student[" + key + "]: ", student[key]);
                //console.log("Student verifier: filter[" + key + "]: ", filter[key]);
                if (student[key] == filter[key]) {
                    getThis = true;
                } else {
                    getThis = false;
                    return false
                }
            });
            //console.log("can i get this?: ", getThis);
            if (getThis === true) {
                students.data.splice(i, 1)
                getThis = false;
            }
        });

    },
    getAll: function() {
        console.log(this.data);
    }
};


students.addStudent("Harishkumar", 33, "7801070710");
students.addStudent("Harishkumar", 32, "7801070710")
students.addStudent("Girishkumar", 33, "7801070710");
students.addStudent("Sirishkumar", 33, "7801070710");
students.addStudent("Rameshkumar", 33, "7801070710");
students.addStudent("Harikumar", 33, "7801070710");

students.getAll();
// students.getOne({
//     "name": "Harishkumar",
//     "age": 32
// });


students.delete({ "name": "Rameshkumar" });
students.getAll();