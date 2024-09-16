var prompt = require("prompt-sync")();
var check_name = prompt("ENTER YOUR NAME: ");
var guestlist = ["ashutosh", "saumya", "rajveer", "shyam", "tripti"];

var found = false;

for (var i = 0; i < guestlist.length; i++) {
  if (guestlist[i].toLowerCase() === check_name.toLowerCase()) {
    found = true;
    break;
  }
}

if (found) {
  console.log("Welcome to the party, ", check_name);
} else {
  console.log("Sorry ", check_name, ", you are not on the guest list");
}
