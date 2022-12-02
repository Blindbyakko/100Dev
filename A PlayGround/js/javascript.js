function stopSnacking(){
    document.querySelector(".para").innerText += " STOP!";
}

document.querySelector("#help").addEventListener('click', stopSnacking)
/*
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
*/