function calculateFactorial(){
    let number = Number(document.getElementById('number').value);
    let result = document.getElementById("result")
    let fact = 1
    for(let i =1;i<=number;i++){
        fact *= i;
    }
    result.innerText = `The Factorial is ${fact}`
}