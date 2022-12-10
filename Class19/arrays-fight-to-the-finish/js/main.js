//Create an array of movie titles. Loop through the array and each element to the h2.

let movieTitles = ["alien", "alien2", "alien 3"]

for(let i = 0; i < movieTitles.length; i++){
    document.getElementsByTagName("h2")[0].innerText  += movieTitles[i] + " ";
    console.log(movieTitles[i])
}

//Create an array of numbers. Loop through the array and three to each number and replace the old number.

let numbers = [1,2,3,4,5]
numbers.forEach((value,index)=> numbers[index] = value + 3)
console.log(numbers)
//Find the average of all the numbers from question three

let sum = numbers.reduce((value,sum) => value + sum)

let average = sum/numbers.length
console.log(sum)
console.log(average)