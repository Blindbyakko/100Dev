//--- Easy
//create a variable and assign it a number
let number = 1;

//minus 10 from that number

number = number - 10;
//print that number to the console

console.log(number) // should be -9
//--- Medium
//create a variable that holds a value from the input

let inputVal = document.querySelector('#danceDanceRevolution').value;

//add 25 to that number

inputVal += 25

//alert that number

alert(inputVal)

//--- Hard
//create a variable that holds the h1

let h1val = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables

h1val.addEventListener('click', sum)

function sum(){
    console.log(number + parseInt(inputVal))
}