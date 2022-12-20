function Calculator(){
    this.finalResult = 0;

    this.calculate = function(){
        
    }
}

let display = document.querySelector(".display").innerText = "1"


// addEventListener('click', (event) => {
//     let numerator = document.querySelectorAll("numberBtn")
//    console.log(numerator)
// });

const numberButtons = document.querySelectorAll(".numberBtn")
const operator = document.querySelectorAll("operateBtn")


NumberButtons()
function NumberButtons(){
    console.log("hello")
    console.log(numberButtons.length)
    numberButtons.forEach((btns) => {
    // btns.addEventListener("click", (event) => {
    //   calculator.displayCurrentNumbers(event.target.innerText);
      
    // });
    console.log(btns.innerText)
  });
}

// console.log(numerator)
// let numerator = document.querySelectorAll("numberBtn")