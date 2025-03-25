function calculate(operator) {
  let result = document.getElementById("result");
  let value1 = document.getElementById("value1").value;
  let value2 = document.getElementById("value2").value;
  if (value1 == "" || value2 == "") {
    result.innerText = `please fill both inputs`;
    return;
  }
  value1 = Number(value1);
  value2 = Number(value2);

  switch (operator) {
    case "add":
      result.innerText = `Output : ${value1 + value2}`;
      return;
    case "sub":
      result.innerText = `Output : ${value1 - value2}`;
      return;
    case "mul":
      result.innerText = `Output : ${value1 * value2}`;
      return;
    case "div":
      if (value2 == 0) {
        result.innerText = "Division by zero is not possible";
      } else {
        result.innerText = `Output : ${value1 / value2}`;
      }
      return;
    case "mod":
      if (value2 == 0) {
        result.innerText = "Division by zero is not possible";
      } else {
        result.innerText = `Output : ${value1 % value2}`;
      }
      return;
    default:
      result.innerText = `Error : Operator mismatch`;
      return;
  }
}

document.getElementById("calculate").addEventListener("click", () => {
  let operator = document.getElementById("operator").value;
  calculate(operator);
});
