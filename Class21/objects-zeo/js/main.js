//Create a stopwatch object that has four properties and three methods

let stopWatch = {
    colour: "black",
    brand: "nike",
    shape: "round",
    size: "medium",

    details(){
        console.log(`Stop watch is ${this.colour} in colour. It's shape is ${this.shape} and is ${this.size} in size. The brand is ${this.brand}`)
    },

    StartTimer(){
        console.log("STARTTTTTT!")
    },
    StopTimer(){
        console.log("STOOOPPPP!")
    }
}

stopWatch.details()
stopWatch.StartTimer()
stopWatch.StopTimer()
console.log(stopWatch)