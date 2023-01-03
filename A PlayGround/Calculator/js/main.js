function Calculator(){
    this.finalResult;
    this.expression = display.innerText
    this.prevTotal = null;
    this.evaluate = function(){
        console.log(display.innerText)
        //this.expression// = display.innerText
        console.log("expression is: "  + this.expression)
        readExpression()
        console.log("time to add")
    }
    this.display = function(calcInput){
        this.expression += calcInput
      // console.log("hello display "  + display.innerText)
      if(display.innerText === "0"){
        console.log("hello display "  + display.innerText)
        display.innerText = this.expression
      }
      else {
        // this.expression += calcInput
        display.innerText += this.expression
     }
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

const numberButtons = document.querySelectorAll(".numberBtn");
const operator = document.querySelectorAll(".operatorBtn");
const evaluate = document.querySelector(".equationBtn");
const myCalc = new Calculator()

// Read Number buttons and display
// Uses Calculator object, and display method
numberButtons.forEach((btns) => {
  btns.addEventListener("click", (event) => {
    console.log(btns.innerText)
    myCalc.display(btns.innerText)
  });
});

// Read operator buttons and display
// Uses Calculator object, and display method
operator.forEach((btns) => {
  btns.addEventListener("click", (event) => {
    // display.innerText = btns.innerText
    myCalc.display(btns.innerText)
    console.log( btns.innerText)
  });
});


// Reads equal(" = ") button
// Uses Calculator object, and evaluate method
evaluate.addEventListener("click", (event) => {
  myCalc.evaluate(evaluate.innerText)
  console.log( evaluate.innerText)
});


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