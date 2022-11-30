//---Easy
//create a function that subtracts two numbers and alerts the difference

function subTwoNumbers(num1, num2){
    alert(num1 - num2)
}

subTwoNumbers(1,1)

//create a function that divides three numbers and console logs the quotient

function divideThreeNumbers(num1, num2, num3){
    console.log("divideThreeNumbers result: " + num1/num2/num3)
}

divideThreeNumbers(8,2,4)

//create a function that multiplys three numbers and returns the product

function multiplyThreeNumbers(num1, num2, num3){
    return (num1 * num2* num3)
}

let result = multiplyThreeNumbers(2,2,2)
console.log("result of multiply: " + result)  // should be 8

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function mathStuff(num1, num2, num3){
    sum = num1 + num2;
    return sum % num3
}

let mathStuffResult = mathStuff(2,2,4) // should be 0
console.log("result of mathStuff: " +
 mathStuffResult);
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number


function fourValues(num1, num2, num3, num4){
    let product = num1 * num2;
    let sum = 0
    let difference = 0
    if(product > 100){
        sum = num3 + num4;
        console.log("Sum: " + sum)
    }
    else if (product < 100){
        difference = num3 - num4;
        console.log("difference: " + difference)
    } 
    else {
        alert((num1 * num2 * num3) % num4)
    }
}

let fourResult1 = fourValues(50,1,5,5) // 10
let fourResult2 = fourValues(50,3,5,5) // 0
let fourResult3 = fourValues(50,2,1,3) // 1

// console.log("fourResult1 : " + fourResult1)
// console.log("fourResult2 : " + fourResult2)
// console.log("fourResult3 : " + fourResult3)