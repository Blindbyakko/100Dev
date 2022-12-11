//Arrays

//Create and array of tv shows. Loop through and print each show to the console

let tvShows = ["House M.D", "Orange is the new black", "Game of thrones"]

console.log(...tvShows)
tvShows.forEach((show, element) => {
    console.log(`TV show: ${show}`)
});

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

let arrNumbers = [1,2,3,4,5,6,7,8,9]
let evenNumbers = arrNumbers.filter((n) => n % 2 == 0)

console.log(evenNumbers)

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function secondHighestAndLowest(arr){
    let sorted = arr.sort((a,b) => a - b)
    alert(sorted[1] + sorted[sorted.length-2])
}
arr = [10,9,8,7,6,5,4,3,2,1]
secondHighestAndLowest(arr)