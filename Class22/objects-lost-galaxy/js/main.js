//Create a mouse object that has four properties and three methods


// let mouse = {
//     colour: "white",
//     type: "field",
//     length: 12,
//     weight: 21,

//     details(){
//         console.log(`The ${type} mouse is ${colour} in colour. It is ${length} in length and weights ${weight}g`)
//     }
// }

// My mouse obj
/*
let mouse = {};

mouse.color = "white";
mouse.type = "field";
mouse.length = 12;
mouse.weight = 21;

mouse.details = function(){
    console.log(`The ${this.type} mouse is ${this.colour} in colour. It is ${this.length} in length and weights ${this.weight}g`)
};
mouse.jump = function(){
    console.log(`The ${this.type} mouse jumps at you! AHHHH`)
};

mouse.sound = function(){
    console.log(`The ${this.type} mouse squeak squeak squeak`)
}*/
//==========================

let mouse = {}

mouse.brand = "Logitech"
mouse.colour = "black";
mouse.model = "MX Ergo";
mouse.wireless = true;

mouse.leftClick = function(){
    console.log("LEFT CLICKKKK")
}
mouse.rightClick = function(){
    console.log("RIGHT CLICKKKK")
}

mouse.scroll = function() {
    console.log( "JUMP  JUMP JUMP")
}

let mouse2 = {}

mouse2.brand = "Logitech"
mouse2.colour = "black";
mouse2.model = "Pro Wireless";
mouse2.wireless = true;

mouse2.leftClick = function(){
    console.log("LEFT CLICKKKK")
}
mouse2.rightClick = function(){
    console.log("RIGHT CLICKKKK")
}

mouse2.scroll = function() {
    console.log( "JUMP  JUMP JUMP")
}


let mouse3 = {}

mouse3.brand = "Apple"
mouse3.colour = "Silver";
mouse3.model = "Magic Trackpad 2";
mouse3.wireless = true;

mouse3.leftClick = function(){
    console.log("LEFT CLICKKKK")
}
mouse3.rightClick = function(){
    console.log("RIGHT CLICKKKK")
}

mouse3.scroll = function() {
    console.log( "SLIDE TWO FINGERS UP")
}


