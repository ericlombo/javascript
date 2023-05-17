let num1 =  prompt ("50");
let num2 = prompt ("30");

function calculator(num1, num2, operator){
    if (operator === "+"){
        console.log (num1 + num2)
    }
    else if( operator ==="-"){
        console.log(num1 - num2)
    }
    else if (operator === " % "){
        console.log (num1 % num2)
    }
    else if (operator === "/"){
        console.log(num1 / num2)
    }

}
calculator (50,30,"+",)

nums =[1,2,3,4,5]
function twoSum (nums,target){
for(let i=0; i<nums.length; i++){
    for(let j = i +1; j<nums.length;j++){
        if(nums[i]+nums[j]===target){
            console.log()
        }
    }
}
}
let myList=[1,2,3,4,5,6]
let target=3
twoSum(myList,target)