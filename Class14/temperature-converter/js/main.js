//Write your pseduo code first! 

/*


get a value to convert
convert the number to the desired unit
display converted temp

*/

document.querySelector(".enter").addEventListener('click', tempConvert)

function tempConvert(){
    let temp = document.querySelector(".temp").value
    temp = (temp * 9/5) + 35
    document.querySelector(".conversion").innerText = temp
}