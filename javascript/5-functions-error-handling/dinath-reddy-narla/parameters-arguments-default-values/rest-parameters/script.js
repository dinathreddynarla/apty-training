
function getSum(...arr){
    let sum =0
    arr.forEach(num => sum+=num)
    return sum
}

document.getElementById("calculate").addEventListener('click' ,()=>{
    let numberArray = document.getElementById("numberArray").value.split(',')
    
    //checking if array is empty 
    if(numberArray.length == 1 && numberArray[0]=='') {
        document.getElementById("result").innerText = `please fill the input with numbers separated by comma`
        return;
    }

    // Check for isNaN because if an empty string is converted to a number, it gives NaN.
    // For example, in '1,2,' after the last comma, it treats the empty space as a value,
    // which converts to NaN after parseInt.
    numberArray = numberArray.map(num => !isNaN(parseInt(num)) ? parseInt(num): 0)
    console.log(numberArray);
    document.getElementById("result").innerText = `Sum is ${getSum(...numberArray)}`

    

})