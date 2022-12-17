console.log("================== TASK 1 ==================") 
user = {
    name: "John",
    surname: "Smith",
}

console.log(user)
user.name = "Pete"
console.log(user)
delete user.name
console.log(user)

console.log("================== TASK 2 ==================") 

function isEmpty(obj){
    for(let prop in obj){  
        return false
    }
    return true
}

console.log(isEmpty(user))

console.log("================== TASK 3 ==================") 

let salaries = {
    john : 100,
    ann: 160,
    pete: 130,
}

function sumSalaries(salaries){
    sum = 0
    for(let prop in salaries){
        sum += salaries[prop]
    }
    return sum
}

console.log(sumSalaries(salaries))
console.log("================== TASK 4 ==================") 

let menu = {
    width : 200,
    heightL: 300,
    title: "my menu",
}
function multiplyNumeric(obj){
    for(let prop in obj){
        if(typeof (obj[prop]) === "number"){
            obj[prop] = obj[prop] * 2
        }
    }
}
console.log(menu)
multiplyNumeric(menu)
console.log(menu)