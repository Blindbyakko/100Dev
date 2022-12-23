function Calculator(){
    this.finalResult = 0;
    this.expression = display.innerText
    this.stack = []
    this.evaluate = function(){
        console.log(display.innerText)
        this.expression = display.innerText
        console.log(this.expression)
        readExpression()
        console.log("time to add")
    }
    this.display = function(calcInput){
      console.log("hello display " )
      this.expression = calcInput
      display.innerText += this.expression
    }

    // Will read in the express and parse out the sign
    function readExpression(){
      this.expression = display.innerText.split("")
      this.expression.forEach((value) =>{
        console.log(typeof value)
            if(checkOperator(value)){
              console.log("value is")
            }
      })
    }
    /* 
    helper function - takes input from readExpression, and will
    return the operation
    */
    function checkOperator(value){
      switch(value){
        case("+"):{
          return true
          break;
        }
        case("-"):{
          return true
          break;
        }
        case("x"):{
          return true
          break;
        }
        case("/"):{
          return true
          break;
        }
        default:{
          return false
        }
      }
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