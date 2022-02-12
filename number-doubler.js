//Write a program that prompts the user for a number, then repeatedly 
//doubles that number until it is greater than or equal to 100.


const prompt = require("prompt-sync")();
let number = (prompt('Enter Number to have Doubled: '));


while (number < 100) {
    number*=2;
    console.log (number)
}