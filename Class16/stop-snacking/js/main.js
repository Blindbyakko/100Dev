//Create a function that grabs the number of snacks from the input and tells you to stop that many times


function stopSnacking(){
    let snacks = Number(document.querySelector('input').value)
    document.querySelector("#stops").innerText = "";
    while(snacks > 0){
        console.log("stop!")
        document.querySelector("#stops").innerText += " STOP!";
        snacks--
    }
}

document.querySelector("#help").addEventListener('click', stopSnacking)