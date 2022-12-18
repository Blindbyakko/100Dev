// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

let sentance = "Is this a question?"
//alert(sentance.includes("?")) // will check for any ? maybe checking for ? at end is better.


//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let string = "If i gain enough exp i will become a jr. dev"
console.log(string.replaceAll("jr. dev", "software engineer"))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockpaperscissors(){
    let result = Math.round(Math.random()*2) + 1 
    switch(result){
        case(1): return "rock".toLowerCase()
        case(2): return "paper".toLowerCase()
        case(3): return "scissors".toLowerCase()
    }
}

console.log(rockpaperscissors())
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function gameRPS(choice){
    let bot = rockpaperscissors()
    console.log(`You selected ${choice}. Bot picked ${bot}`)
    switch(choice.toLowerCase()){
        case("rock"): {
            if(bot === "rock"){
                return "Game is a tie!"
            }
            else if(bot === "paper"){
                return "You lost"    
            }
            else return "You won!"
        }
        case("paper"):{
            if(bot === "paper"){
                return "Game is a tie!"
            }
            else if(bot === "scissors"){
                return "You lost"    
            }
            else return "You won!"
        }
        case("scissors"): {
            if(bot === "scissors"){
                return "Game is a tie!"
            }
            else if(bot === "rock"){
                return "You lost"    
            }
            else return "You won!"
        }
    }
}

console.log(gameRPS("rock"))

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function RPSgame(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(gameRPS(arr[i]))
    }
}

arr = ["rock", "paper", "scissors","rock", "paper", "scissors"]
RPSgame(arr)
