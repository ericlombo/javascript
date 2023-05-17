// write a program that takes a positive integer n as input and outputs the sum of all numbers between 1 and n that are divisible by 3 or 5 (or both).
// For example, if n is 15, the program should output 45, since the numbers between 1 and 15 that are divisible by 3 or 5 are: 3, 5, 6, 9, and 10, and their sum is 45.

// Here are some additional requirements and hints:

// Use a loop to iterate over all the numbers between 1 and n.
// Use an if statement and the modulus operator (%) to check if a number is divisible by 3 or 5.
// Use a variable to keep track of the running sum, and update it on each iteration of the loop.
// You can assume that the input n will be a positive integer.
// Good luck!


let number = 10
let sum = 0;

for(let i =0; i<number; i++)
if (i % 3 || i % 5){
    sum+= i
}

console.log(sum)