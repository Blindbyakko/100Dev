//Create a conditonal that checks their age


//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

let age = 26
if(age < 16){
    console.log("You can not drive")
}
else if(age < 18){
    console.log("they can't hate from outside the club, because they can't even get in")
}
else if(age < 21){
    console.log("You can not drink")
}
else if(age < 25){
    console.log("can not rent fancy cars affordably")
}
else if( age < 30 || age > 30){
    console.log("There is nothing left to look forward to")
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

let h1val = document.querySelector('h1')
let pValue = document.querySelector('p')
h1val.addEventListener('click', getAge)

function getAge(){
    let ageInput = document.querySelector('#danceDanceRevolution').value;
    document.querySelector("p").innerText = ageInput
}