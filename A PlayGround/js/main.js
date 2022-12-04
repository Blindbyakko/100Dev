function stopSnacking(){
    document.getElementsByClassName("conversion")[0].innerHTML += "hi"
}

document.querySelector("#help").addEventListener('click', stopSnacking)

function stopSnacking(){
    console.log("test")
    document.getElementsByClassName("conversion")[0].innerHTML += "hi"
}
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

for(let i = 0; i < 10; i++){
    console.log(i)
}