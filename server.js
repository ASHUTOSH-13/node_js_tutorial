const _ = require("lodash"); // for lodash we generally use _ this is the convention that is being followed
const notes = require("./node5.js");

console.log("the new file has been imported !!!!");

var age = notes.age;
console.log(age);

var arr = ["person", "person", "ashutosh", 1, 2, 3, 1, 4, "rajveer"];
var filter = _.uniq(arr);
console.log(filter);
// lodash is a library that has many features to deals with the arrays and many more ....
// one of the features is being shown above ......

console.log(_.isString("ashu")); // returns true
