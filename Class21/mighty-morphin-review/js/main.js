// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let favHoliday = "Halloween".toUpperCase();
console.log(favHoliday)
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let str = "Hello World!"
alert(str.substring(str.length-3,))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

const subtractFromOneHundred = (n1,n2,n3,n4,n5) => {
    difference = 100 - n1 - n2 - n3 - n4 - n5
    alert(Math.abs(difference))
}

subtractFromOneHundred(100,2,3,4,5) // -14 = 14
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

const highLowValues =  (n1,n2,n3) => {
    let arr = [n1, n2, n3]
    console.log(Math.min(...arr))
    console.log(Math.max(...arr))
}

highLowValues(5,9,1)  // L = 1 , H = 9

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

const coinToss = () => {
    let coinToss = Math.round(Math.random())
    if(0 == coinToss){
        return "Heads"
    }
    return "Tails"
}

console.log(coinToss())
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.


function coinTosses(n){
    for(let i = 0; i < n; i++){
        console.log(coinToss())
    }
}

coinTosses(10)