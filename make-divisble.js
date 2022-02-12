//Write a program that prompts the user for two numberx, x and y.
//The program should add one to x until it is divisble by y.

const prompt = require("prompt-sync")();
 let x = Number(prompt('Enter the number of: '));
 let y = Number(prompt('Enter the number of: '));


while (x % y !== 0) {

    x = x +1;
    console.log(x)
 
}
 




 