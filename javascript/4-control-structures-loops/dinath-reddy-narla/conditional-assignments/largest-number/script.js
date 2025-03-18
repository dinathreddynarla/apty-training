function findLargest(){
    let result = document.getElementById("result")
    let value1 = document.getElementById('value1').value;
    let value2 = document.getElementById('value2').value;
    let value3 = document.getElementById('value3').value;

    if(value1.trim()=="" || value2.trim()=="" || value3.trim()==""){
        result.innerText = `please fill all inputs`
        return;
    }
    value1 = Number(value1)
    value2 = Number(value2)
    value3 = Number(value3)

    if((value1 > value2) && (value1 > value3)){
        result.innerText = `Largest Number is ${value1}`    
    }else if((value2 > value1) && (value2 > value3)){
        result.innerText = `Largest Number is ${value2}`   
    }else{
        result.innerText = `Largest Number is ${value3}`
    }
    return;
}
