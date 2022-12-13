//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighter(name, country, special_ability, hitPoints){
    this.name = name
    this.country = country
    this.special_ability = special_ability
    this.hitPoints = hitPoints

    this.details = function(){
        console.log(`You've selcted ${this.name} from ${this.country}. ${this.name}'s has ${this.hitPoints} Hit Points and its Special Ability is: ${this.special_ability}`)
    }
    this.special = function(){
        console.log(`${name} uses ${special_ability}!!!`)
    }
    this.punch = function(){
        console.log(` ${name} uses punch! `)
    }
}

let ken = new StreetFighter("ken","USA","Fireball",100)

ken.details()
ken.special()
ken.punch()
