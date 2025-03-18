function sumAndAverage(){
    let numberArray = document.getElementById('number').value.split(',');
    let result = document.getElementById("result")
    let sum = 0
    for( let number of numberArray){
            sum += Number(number)
    }
    
    result.innerText = `The Sum is ${sum} and Average is ${sum/numberArray.length}`
}