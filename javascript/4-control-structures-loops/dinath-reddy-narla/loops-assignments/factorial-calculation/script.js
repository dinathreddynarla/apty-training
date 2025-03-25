function calculateFactorial() {
  let number = document.getElementById("number").value;
  let result = document.getElementById("result");
  if (number == "") {
    result.innerText = `Error : Input should not be Empty`;
  } else if (number < 0) {
    result.innerText = `The Factorial is not defined for negative numbers`;
  } else {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }
    result.innerText = `The Factorial is ${factorial}`;
  }
}
