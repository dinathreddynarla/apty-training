let result = document.getElementById("result")
function getInputs(){
    let value1 = document.getElementById("value1").value;
    let value2 = document.getElementById("value2").value;
    if(value1.trim() == "" || value2.trim() == "" ){
        return alert("please fill both inputs")
    }
    value1 = Number(value1)
    value2 = Number(value2)
    return {value1 , value2}
}

function bitwiseAnd(){
    let {value1 , value2 } = getInputs();
    result.innerHTML = `output : ${value1 & value2}`
}

function bitwiseOr(){
    let {value1 , value2 } = getInputs();
    result.innerHTML = `output : ${value1 | value2}`
}

function bitwiseXor(){
    let {value1 , value2 } = getInputs();
    result.innerHTML = `output : ${value1 ^ value2}`
}

function bitwiseNot(){
    let {value1 } = getInputs();
    result.innerHTML = `output : ${~value1}`
}

function bitwiseLeftShift(){
    let {value1 , value2} = getInputs();
    result.innerHTML = `output : ${value1 << value2}`
}

function bitwiseRightShift(){
    let {value1, value2 } = getInputs();
    result.innerHTML = `output : ${value1 >> value2}`
}