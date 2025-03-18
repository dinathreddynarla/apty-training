function sumOfNumbers(){
    let number = Number(document.getElementById('number').value);
    let result = document.getElementById("result")
    let sum = 0
    for(let i =1;i<=number;i++){
        sum +=i;
    }
    result.innerText = `The sum is ${sum}`
}