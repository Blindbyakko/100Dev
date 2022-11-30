//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?


function twentyOne(){
    for(let i = 0; i < 21; i++){
        console.log(21)
    }
}

twentyOne()



let h1val = document.querySelector('h1')

function twentyOneToDOM(){
    for(let i = 0; i < 21; i++){
        document.querySelector("#savageSays").innerText += 21 + " | "
    }
}

twentyOneToDOM()