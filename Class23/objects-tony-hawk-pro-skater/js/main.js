//Create a Tony Hawk Pro Skater constructor that makes skating game characters with 4 properties and 3 methods


function CharacterCreater(name, signatureMove, brand, stance){
    this.name = name
    this.signatureMove = signatureMove
    this.brand = brand
    this.stance = stance

    this.stanceSwitch = function(){
        console.log(`${this.name} switches stance!`)
    }

    this.ollie = function(){
        console.log(`${this.name} does an ollie! AMAZING!`)
    }
    this.kickflip = function(){
        console.log(`${this.name} does an kickflip! OMGGGGGGG!!!!!`)
    }
    this.describeCharacter = function(){
        console.log(`${this.name} signature move is the ${this.signatureMove}. ${this.name} represents the ${this.brand} brand and skates ${this.stance}`)
    }
}

 let tony = new CharacterCreater("Tony Hawk", 900, "Birdhouse", "normal")
 tony.describeCharacter()