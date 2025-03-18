
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
    
    // checkfor isNaN because if a empty string is converted to number gives NaN l
    // ike for 1,2, for after last , it gives one space as one value which coverts to NaN after parseInt
    numberArray = numberArray.map(num => !isNaN(parseInt(num)) ? parseInt(num): 0)
    console.log(numberArray);
    document.getElementById("result").innerText = `Sum is ${getSum(...numberArray)}`

    

})