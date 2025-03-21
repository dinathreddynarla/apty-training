function calculateFactorial(){
    let number = Number(document.getElementById('number').value);
    let result = document.getElementById("result")
    let factorial = 1
    for(let i =1;i<=number;i++){
        factorial *= i;
    }
    result.innerText = `The Factorial is ${factorial}`
}