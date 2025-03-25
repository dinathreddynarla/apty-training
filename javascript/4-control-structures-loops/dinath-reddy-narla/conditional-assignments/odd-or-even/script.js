function checkOddEven() {
  let result = document.getElementById("result");
  let number = document.getElementById("value").value;
  if (number == "") {
    result.innerText = "input should not be empty";
    return;
  }

  if (number % 2 === 0) {
    result.innerText = `The number ${number} is Even.`;
  } else {
    result.innerText = `The number ${number} is Odd.`;
  }
}