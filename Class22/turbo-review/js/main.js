// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

let favDrink = "water"
console.log(favDrink.trim())

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let isApple = "The apple fell on his head and explored"
console.log(isApple.includes("apple"))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

const rockPaperScissors = _ => {
    let result = Math.floor((Math.random() * 3) + 1)
    switch(result){
        case(1): return "Rock".toLowerCase()
        case(2): return "Paper".toLowerCase()
        case(3): return "Scissors".toLowerCase()
    }
}

console.log(rockPaperScissors())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function GameRPS(choice){
    let bot = rockPaperScissors()
    console.log(`You picked ${choice}. Bot picked ${bot}`)
    switch(choice.toLowerCase()){
        case("rock"): 
            if(bot === "rock"){
                return "Tie game"
            }
            else if( bot === "paper"){
                return "You lose! Bot wins"
            }
            else return "You win! Bot Loses"
        case("paper"):
            if(bot === "paper"){
                return "Tie game"
            }
            else if(bot === "scissors"){
                return "You lose! Bot wins"
            }
            else return "You win! Bot Loses"
        case("scissors"):
            if(bot === "scissors"){
                return "Tie game"
            }
            else if(bot === "rock"){
                return "You lose! Bot wins"
            }
            else return "You win! Bot Loses"

    }
}

console.log(GameRPS("rock"))

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function gameOfRPS(n){
    for(let i = 0; i < n.length; i++){
        console.log(GameRPS(n[i]))
    }
}

gameOfRPS(["rock","paper","scissors","rock","paper","scissors"])