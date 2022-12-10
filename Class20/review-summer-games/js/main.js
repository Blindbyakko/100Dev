//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 


const findProduct = (arr) => {
    // Another method using for loop
    // for(let i = 0; i < arr.length; i++){
    //     sumOfProduct = sumOfProduct * arr[i]
    // }

    // Another method using forEach loop
    // arr.forEach( num => sumOfProduct *= num)
    
    let sumOfProduct = arr.reduce((sumOfProduct, ArrValue) => sumOfProduct * ArrValue, 1)
    alert(sumOfProduct)
}

findProduct([2,2,2,2])  // 16
findProduct([2,5,7,1])  // 70
findProduct([10,2,3])  // 60