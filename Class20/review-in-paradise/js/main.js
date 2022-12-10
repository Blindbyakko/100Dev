// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

let favFood = "pineapple";
favFood = "Pizza"
console.log(favFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let str = "Hello World!"
alert(str[1])


// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function divideByTwoMultByLast(n1,n2,n3){
    alert((n1/n2) * n3)
}

divideByTwoMultByLast(10,2,5)  // 25

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

//toFixed - reduces the number of decimals.
function cubeRootOfNumber(n){
    console.log(Math.cbrt(n).toFixed(4))
}


cubeRootOfNumber(3)  // 27

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function SummerMonths(month){
    summer = ["june", "july", "august"]
    for(let i = 0; i < summer.length; i++){
        if(summer[i] == month.toLowerCase()){
            return true
        }
    }
    return false
}

function whichSeason(month){
    if(SummerMonths(month)){
        alert("Yay")
    }
    else{
        alert("Booo")
    }
}

whichSeason("June")  //true - Yay
whichSeason("December")  //false - boo



//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function counter(n){
    for(let i = 1; i < n; i++){
        if(!(i%5 == 0)){
            console.log(i)
        }
    }
}

counter(10)