//Write a program that takes a string and 'repeats it' until the string's 
//length is greater than or equal to 10.


// x has to be greater then 10, if it is not the 
//equation must continue until its false.

const prompt = require("prompt-sync")();
let string1 = (prompt('Enter string to repeat: '));

let string2 =string1

console.log(string2)

while (string1.length < 10) { 
    string1 = string1 + string2
    console.log(string1)
    
}