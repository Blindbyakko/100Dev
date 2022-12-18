//Create a dog object that has four properties and three methods

let dog = {}

dog.breed = "mutt"
dog.colour = "black"
dog.size = "large"
dog.name = "fiddo"

dog.bark = function(){
    console.log("BARK BARK BARK! GRRRRR!!!")
}

dog.jump = function(){
    console.log("Dog jumps up to greet you!")
}

dog.eat = function(){
    console.log("Dog is enjoying it's kibble. Yummmmm")
}

console.log(`The dog is type ${dog.breed}. It's coat is ${dog.colour}, and it's size is ${dog.size}. It's name is ${dog.name}`)

dog.eat()
dog.jump()
dog.bark()