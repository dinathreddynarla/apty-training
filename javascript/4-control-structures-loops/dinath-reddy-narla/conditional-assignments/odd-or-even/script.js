function checkOddEven() {
    var number = document.getElementById("value").value; 
    var result = document.getElementById("result");

    if (number % 2 === 0) {
        result.innerText = `The number ${number} is Even.`;
    } else {
        result.innerText = `The number ${number} is Odd.`;
    }
}
