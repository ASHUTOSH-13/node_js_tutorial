var prompt = require("prompt-sync")();
const age = prompt("ENTER YOUR AGE: ");
if (age <= 18) {
  console.log("HURRAY!, YOU GOT A 20% DISCOUNT!!!!");
} else if (age > 18 && age <= 65) {
  console.log("NORMAL TICKET PRICE APPLIED!!!");
} else {
  console.log("YOU GOT 30% SENIOR DISCOUNT!!!");
}
