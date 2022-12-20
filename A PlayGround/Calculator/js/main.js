function Calculator(){
    this.finalResult = 0;
    this.expression = ""
    this.evaluate = function(){
        console.log("time to add")
    }
    this.display = function(calcInput){
      console.log("hello display")
      this.expression = calcInput
      display.innerText += this.expression
    }
}

let display = document.querySelector(".display")


// addEventListener('click', (event) => {
//     let numerator = document.querySelectorAll("numberBtn")
//    console.log(numerator)
// });

const numberButtons = document.querySelectorAll(".numberBtn");
const operator = document.querySelectorAll(".operatorBtn");
const evaluate = document.querySelector(".equationBtn");

const myCalc = new Calculator()

numberButtons.forEach((btns) => {
  btns.addEventListener("click", (event) => {
    // display.innerText = btns.innerText
    console.log(btns.innerText)
    myCalc.display(btns.innerText)
  });
  // myCalc.display(btns.innerText)
});
operator.forEach((btns) => {
  console.log("hello")
  btns.addEventListener("click", (event) => {
    // display.innerText = btns.innerText
    myCalc.display(btns.innerText)
    console.log( btns.innerText)
  });
});
// evaluate.forEach((btns) => {
  evaluate.addEventListener("click", (event) => {
    myCalc.evaluate(evaluate.innerText)
    console.log( evaluate.innerText)
  });
// });


// NumberButtons()
// function NumberButtons(){
//     console.log("hello")
//     // console.log(numberButtons.length)
//     numberButtons.forEach((btns) => {
//     btns.addEventListener("click", (event) => {
//       display.innerText = btns.innerText
//       console.log(btns.innerText)
//     });

//     // console.log(btns.innerText)
//   });
// }

// console.log(numerator)
// let numerator = document.querySelectorAll("numberBtn")