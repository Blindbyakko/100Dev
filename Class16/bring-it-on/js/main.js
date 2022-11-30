// *Variables*
// Create a variable and console log the value

let variable = 10
console.log(variable)


// Create a variable, add 10 to it, and alert the value

let newVar = 10
alert(newVar)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subFourNumbers(num1, num2, num3, num4){
    diff = num1 - num2 - num3 - num4;
    alert(diff)
}

subFourNumbers(4,1,1,1)  //1

// Create a function that divides one number by another and returns the remainder

function divide(num1,num2){
    return num1%3
}

result = divide(5)
console.log("divide result:" + result)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwoNumbers(num1, num2){
    sum = num1 + num2;
    if(sum > 50){
        alert("Jumanji")
    }
    else alert("No Jumanji  :(")
}
addTwoNumbers(50,5)
addTwoNumbers(5,0)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplyThreeNumbers(num1, num2, num3){
    product = num1 * num2 * num3;
    if( product%3 === 0){
        alert("ZEBRA")
    }
    else alert(" NO ZEBRA")
}

multiplyThreeNumbers(3,3,3) // yes
multiplyThreeNumbers(2,2,2) // yes

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function repeater(word, n){
    for(let i = 0; i < n; i ++){
        console.log(word)
    }
}
repeater("hi", 10)