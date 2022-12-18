//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let arr = [1,2,3,4,5,6,7,8,9]

let sum = arr.reduce((sum, x) => sum += x, 0)
console.log(sum)  //45

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

let squared = (arr)=>{
    return arr.map((x) => x ** 2)
}

newArr = [1,2,3,4,5]
console.log(squared(newArr))


//Create a function that takes string
//Print the reverse of that string to the console

function reverseString(str){
    let reverse = "";
    for(let i = str.length-1; i >= 0; i--){
        reverse += str[i]
    }
    return reverse
}
str = "hello i'm backwards"
// a one line method 
let reverse =  str => str.split("").reverse().join("")
console.log(reverse(str))
console.log(reverseString(str))

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function palindromeChecker(str){
    for(let i = 0; i < str.length/2; i++){
        if(str[i] !== str[(str.length-1)- i]){
            alert(false)
            return false
        }
    }
    alert(true)
    return true
}

const palindromeCheck = str => alert( str === reverse(str))

console.log(palindromeChecker("helleh")) //true
console.log(palindromeChecker("tester")) // false

palindromeCheck("ono ono")
palindromeCheck("one one")
