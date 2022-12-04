//---Easy
//create a function that subtracts two numbers and alerts the difference

function subTwoValue(num1, num2){
    alert(num1 - num2)
}
subTwoValue(5,2)  // 3
//create a function that divides three numbers and console logs the quotient
function divThreeValue(num1, num2, num3){
    console.log(num1/num2/num3)
}
divThreeValue(10,2,5)  //0 

//create a function that multiplys three numbers and returns the product

function multThreeValue(num1, num2, num3){
    return num1 * num2 * num3
}

console.log(multThreeValue(2,2,2))  // 8

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function mathFunc(num1, num2, num3){
    let sum = num1 + num2
    return sum % num3
}

console.log(mathFunc(5,5,3)) //1


//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function moreMathFunct(num1, num2, num3, num4){
    let product = num1 * num2;
    if(product > 100){
        console.log(num3 + num4)
    }
    else if(product < 100){
        console.log(num3 - num4)
    }
    else alert((num1*num2*num3)%num4)
}

moreMathFunct(50,3,5,5)
moreMathFunct(50,1,5,10)
moreMathFunct(50,2,1,9)
