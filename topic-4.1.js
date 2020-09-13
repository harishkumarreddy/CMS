var alphas = ["a", "d", "c", "b", "f", "e"];
var nums = [1, 2, 3, 4, 5, 6, 4, 5, 2, 6, 1, 3];
console.log(alphas);
console.log("numbet of items: ", alphas.length);

alphas.sort();
console.log(alphas);

alphas.reverse();
console.log(alphas);

var str_alphas = alphas.toString();
console.log("array to string: ", str_alphas);

var str_alphas = alphas.join();
console.log("array join: ", str_alphas);

var str_alphas = alphas.join("-");
console.log("array join with '-': ", str_alphas);

var str_alphas = alphas.join("*");
console.log("array join with '*': ", str_alphas);
var str_alphas = alphas.join("");
console.log("array join with '': ", str_alphas);




var alphas = ["a", "d", "c", "b", "f", "e"];
var nums = [1, 2, 3, 4, 5, 6, 4, 5, 2, 6, 1, 3];
// simple loop to get values from array
for (var i = 0; i < alphas.length; i++) {
    console.log(i + ": " + alphas[i]);
}

// simple loop to get values from array
for (var i = 0; i < nums.length; i++) {
    var ind = nums[i] - 1;
    console.log(nums[i] + "=" + alphas[ind]);
}

//name = harish
//output : 8 1