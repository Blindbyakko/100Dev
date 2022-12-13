//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let number = [1,2,3,4,5,6,7,8,9]

let sumOfNumbers = number.reduce((sum, n) => sum + n, 0)
console.log(sumOfNumbers)  //45


//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

let arr = [1,2,3,4,5]
const squareNumbers = (arr) => arr.map((n) => n**2)
console.log(squareNumbers(arr))  // [1,4,9,16,25]

//Create a function that takes string
//Print the reverse of that string to the console

function reverseString(str){
    let reversedString = "" 
    for(let i = str.length-1; i >= 0; i--){
        reversedString += str[i]
    }
    return reversedString
}

console.log(reverseString("hello"))

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function checkPalindrome(str){
    
    for(let i = 0; i < str.length/2; i++){
        if(str[i] !== str[(str.length-1)-i]){
            return false
        }
    }
    return true
}

console.log(checkPalindrome("helleh"))  // true
console.log(checkPalindrome("hello"))   // false
