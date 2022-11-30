//Create a function that grabs the number of snacks from the input and tells you to stop that many times


function stopSnacking(){
    let snacks = document.querySelector('input').value
    while(snacks > 0){
        console.log("stop!")
        snacks--
    }
}

document.querySelector("#help").addEventListener('click', stopSnacking)