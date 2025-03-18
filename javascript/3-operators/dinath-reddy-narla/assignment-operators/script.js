let result = document.getElementById("result")
function getInputs(x="value1&value2"){
    let value1 = document.getElementById("value1").value;
    let value2 = document.getElementById("value2").value;
    if(x == "value1"){
        if(value1.trim() ==""){
            return alert("please fill first input")
        }
        return {value1}
    }
    if(value1.trim() == "" || value2.trim() == "" ){
        return alert("please fill both inputs")
    }
    return {value1 , value2}
}

function addition(){
    let {value1 , value2 } = getInputs();
    value1 = Number(value1)
    value2 = Number(value2)
    value1 += value2
    result.innerHTML = `output : ${value1}`
}

function subtraction(){
    let {value1 , value2 } = getInputs();
    console.log(typeof value1)
    console.log(typeof value2)
    
    value1 -= value2
    result.innerHTML = `output : ${value1}`
}

function multiplication(){
    let {value1 , value2 } = getInputs();
    value1 *= value2
    result.innerHTML = `output : ${value1}`
}

function division(){
    let {value1 , value2 } = getInputs();
    value1 /= value2
    result.innerHTML = `output : ${value1}`    
}

function modulous(){
    let {value1 , value2 } = getInputs();
    value1 %= value2
    result.innerHTML = `output : ${value1}`    
}

function increment(){
    let {value1} = getInputs("value1");
    result.innerHTML = `output : ${++value1}`
}

function decrement(){
    let {value1} = getInputs("value1");
    result.innerHTML = `output : ${--value1}`
}