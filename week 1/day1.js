//function groupBy(a,b){
  //  for (let i=0;i<a.length; i++)
    //if(a[i][b])


   //let workers =(
    //name, 'eric', location; 'mombasa', age; '43', occupation; 'pilot'
    //name; 'john', location;'kisii', age; '29', occupation;'shamba boy'
    //name;'nunez', location; 'mombasa', age; '22', occupation; 'pilot'
    //name; 'pinchez', location; 'japan', age; '22', occupation; 'janitor'
   //)
//}


//the program should:

//Prompt the user to enter the length and width of the rectangle.
//Calculate the area and perimeter of the rectangle using the length and width entered by the user.
let userNum1 = prompt('enter your first number')
let userNum2 =prompt('enter your second number')

let convertedNum1 = parseInt(userNum1)
let convertedNum2 = parseInt(userNum2)

function area (num1, num2){
console.log(num1 * num2)

}

function perimeter (num1,num2){
    console.log(num1 + num2)
}

area (convertedNum1, convertedNum2)
perimeter (convertedNum1, convertedNum2)