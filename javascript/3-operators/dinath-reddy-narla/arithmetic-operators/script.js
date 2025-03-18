let result = document.getElementById("result")
function getInputs(){
    let value1 = document.getElementById("value1").value;
    let value2 = document.getElementById("value2").value;
    if(value1.trim() == "" || value2.trim() == "" ){
        return alert("please fill both inputs")
    }
    return {value1 , value2}
}

function addition(){
    let {value1 , value2 } = getInputs();
    value1 = Number(value1)
    value2 = Number(value2)
    result.innerHTML = `output : ${value1+value2}`
}

function subtraction(){
    let {value1 , value2 } = getInputs();
    result.innerHTML = `output : ${value1-value2}`
}

function multiplication(){
    let {value1 , value2 } = getInputs();
    result.innerHTML = `output : ${value1*value2}`
}

function division(){
    let {value1 , value2 } = getInputs();
    result.innerHTML = `output : ${value1/value2}`
}

function modulous(){
    let {value1 , value2 } = getInputs();
    result.innerHTML = `output : ${value1%value2}`
}

function increment(){
    let {value1 , value2 } = getInputs();
    result.innerHTML = `output : ${++value1} and ${++value2}`
}

function decrement(){
    let {value1 , value2 } = getInputs();
    result.innerHTML = `output : ${--value1} and ${--value2}`
}