const prompt = require("prompt-sync")();
let num = (prompt("enter some numbers"));
    //input numbers

var total = 0;

   while (num !== "done") {
    total = total + parseInt(num) // parseInt changes a string into a number
    num = (prompt(">"));
   } 
   console.log("Your total is: " + total);