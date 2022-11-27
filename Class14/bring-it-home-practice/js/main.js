// *Variables*
// Create a variable and console log the value
let number;
console.log(number)
// Create a variable, add 10 to it, and alert the value
let newNumber = 10
alert(newNumber)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract(num1, num2, num3, num4){
    alert( num1 - num2 - num3 - num4)
}

let resultSub = subtract(10,5,2,3)   // result should be 0
console.log(resultSub)
// Create a function that divides one number by another and returns the remainder

function division(num1, num2){
    return num1 % num2;
}
let resultDiv = division(10,3)   //result should be 1


// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function add( num1, num2){
    let sum = num1 +  num2;
    if(sum > 50){
        alert("Jumanji")
    }
    else{
        alert("no Jumanji")
    }
}

add(10, 5)
add(25, 26)


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiply( num1, num2, num3){
    let product = num1 * num2 * num3;
    if(product%3 === 0){
        alert("ZEBRA")
    }
    else{
        alert("LION!")
    }
}

multiply(1, 4, 2)
multiply(3, 3, 2)