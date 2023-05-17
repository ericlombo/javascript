// Create a function called fibonacci_sequence that takes in an integer n as its parameter and returns a list of the first n numbers in the Fibonacci sequence.

// The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones. The sequence starts with 0 and 1, and each subsequent number is the sum of the previous two





// let num1 =  prompt ("50");
// let num2 = prompt ("30");

// function calculator(num1, num2, operator){
//     if (operator === "+"){
//         console.log (num1 + num2)
//     }
//     else if( operator ==="-"){
//         console.log(num1 - num2)
//     }
//     else if (operator === " % "){
//         console.log (num1 % num2)
//     }
//     else if (operator === "/"){
//         console.log(num1 / num2)
//     }

// }
// calculator (50,30,"+",)

// nums =[1,2,3,4,5]
// function twoSum (nums,target){
// for(let i=0; i<nums.length; i++){
//     for(let j = i +1; j<nums.length;j++){
//         if(nums[i]+nums[j]===target){
//             console.log()
//         }
//     }
// }
// }
// let myList=[1,2,3,4,5,6]
// let target=3
// twoSum(myList,target)

function fibonacci (n){
    if (n<=2){
        return 1
    }

return fibonacci (n-1) + fibonacci (n-2)
}
const result = fibonacci(10)
console.log(result)
