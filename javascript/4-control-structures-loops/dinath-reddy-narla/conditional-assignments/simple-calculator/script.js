function calculate(operator){
    let result = document.getElementById("result")
    let value1 = document.getElementById('value1').value;
    let value2 = document.getElementById('value2').value;
    if(value1.trim()=="" || value2.trim()==""){
        result.innerText = `please fill both inputs`
        return;
    }
    value1 = Number(value1)
    value2 = Number(value2)

    switch(operator){
        case 'add':
            return result.innerText = `Output : ${value1 + value2}`
        case 'sub':
            return result.innerText = `Output : ${value1 - value2}`
        case 'mul':
            return result.innerText = `Output : ${value1 * value2}`
        case 'div':
            return result.innerText = `Output : ${value1 / value2}`
        case 'mod':
            return result.innerText = `Output : ${value1 % value2}`

    }
    return;
}

document.getElementById('calculate').addEventListener('click',()=>{
    let operator = document.getElementById('operator').value;
    calculate(operator)
})