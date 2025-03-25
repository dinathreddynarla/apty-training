function sumAndAverage() {
  let result = document.getElementById("result");
  let input = document.getElementById("number").value;
  if (input === "") {
    result.innerText = "Error: input should not be empty";
    return;
  }
  let numberArray = input
    .split(",")
    .filter((num) => num.trim() != "" && !isNaN(Number(num.trim())))
    .map((num) => Number(num.trim()));

  let sum = 0;
  if (numberArray.length == 0) {
    result.innerText = "Error: No valid numbers entered";
  } else {
    for (let number of numberArray) {
      sum += number;
    }
    let average = sum / numberArray.length;
    result.innerText = `The Sum is ${sum} and Average is ${average}`;
  }
}
