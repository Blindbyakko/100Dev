// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".


function hiByeWeClosed(arr){
        console.log(arr[arr.length-1])
        if(arr[0] < arr[arr.length-1]){
            alert("Hi")
        }
        else if(arr[0] > arr[arr.length-1]){
            alert("Bye")
        }
        else{
            alert("Hi")
            alert("We Close in an hour")
        }
}

hiByeWeClosed([2,1,2,2])  // equal, trigger else
hiByeWeClosed([2,1,2,1])  // greater, trigger else if
hiByeWeClosed([2,1,2,3])  // less then, trigger if