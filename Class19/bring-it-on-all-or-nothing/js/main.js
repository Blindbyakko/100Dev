// *Variables*
// Declare a variable, assign it a boolean, and alert the value

let boo = true;
alert(boo)


// Declare a variable, reassign it to your favorite color, and console log the value
let FavColour;
FavColour = "black";
console.log(FavColour)


// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.

function fourNumbers(n1,n2,n3,n4){
    return ((n1 + n2 + n3) / n4)
}

fourNumbers(10,20,30,5) // 12


// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.

function powerOfN(n1, n2){
    console.log(n1 ** n2)
}

powerOfN(2,2)  // 4

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string

function checkForString(bool, string){
    if(bool){
        alert(string)
    }
    else console.log(string)
}

checkForString(true, "I'm a string")
checkForString(false, "SShhh! I'm a string also!")

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

function fizzbuzz(n){
    for(let i = 1; i <= n; i++){
        if(i%3== 0 && i%5 == 0){
            console.log("fizzbuzz")
        }
        else if(i%3== 0){
            console.log("fizz")      
        }
        else if(i%5== 0){
            console.log("buzz")      
        }
        else console.log(i)
    }
}

fizzbuzz(10) // 
fizzbuzz(9)
fizzbuzz(15)