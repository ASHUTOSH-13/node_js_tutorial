// we get diiferent packages with node js preinstalled..
// one of them is file system, what it does it creates a file and also passes the messege that we want to pass .....  fs file

var fs = require("fs");
var os = require("os");

var user = os.userInfo(); // this gives a little info about our system ......
console.log(user);
console.log(user.username);

fs.appendFile("greeting.txt", "hii ashutosh the file is being created", () => {
  console.log("you can check here!!!");
});

// this append file requires 1. file name 2. messege that you want to print 3. calllback function

console.log(os);
// this shows what what os library can actually do means os can have multiple functionality.....
