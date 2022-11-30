// *Variables*
// Declare a variable, assign it a value, and alert the value

let variable = 10
alert(variable)

// Create a variable, divide it by 10, and console log the value

let newVar = 10
console.log(newVar)

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product

function multiplyThreeNumbers(num1, num2, num3){
    product = num1 * num2 * num3
    alert(product)
}

multiplyThreeNumbers(5,2,10)  // 100

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result

function addFourNumbers(num1, num2, num3, num4){
    let sum = num1 + num2;
    
    console.log("addFourNumber result: "   + (sum - num3 - num4))
}

addFourNumbers(5,5,2,3) // 5

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"

function checkForWinna(num1, num2, num3){
    let value = 100;
    value = (value + num1 - num2)/ num3
    if(value > 25){
        console.log("WE HAVE A WINNNA")
    }
    else console.log("WE HAVE A LOSER!")
}

checkForWinna(5,0,4) // winner
checkForWinna(5,5,5) // loser

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"

function isItTheWeekEnd(input){
    let day = input.toLowerCase()
    if(day === "" || day === undefined){
        alert("Try Again")
    }

    else if(day === "saturday" || day === "sunday"){
        alert("weekend")
    }
    else alert("week day")
}

isItTheWeekEnd("Monday") // week day
isItTheWeekEnd("Sunday") // week end
isItTheWeekEnd("") // try again

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3

function count(num){
    for(let i  = 1; i < num; i+= 3){
        console.log(i)
    }
}

count(9)