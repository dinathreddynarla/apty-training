let result = document.getElementById("result");
function getInputs() {
  let value1 = document.getElementById("value1").value.trim();
  let value2 = document.getElementById("value2").value.trim();
  if (value1 == "" || value2 == "") {
    alert("please fill both inputs");
    return;
  }
  value1 = Number(value1);
  value2 = Number(value2);
  return { value1, value2 };
}

function addition() {
  let inputs = getInputs();
  if (!inputs) return;
  let { value1, value2 } = inputs;
  result.innerHTML = `output : ${(value1 += value2)}`;
}

function subtraction() {
  let inputs = getInputs();
  if (!inputs) return;
  let { value1, value2 } = inputs;
  result.innerHTML = `output : ${(value1 -= value2)}`;
}

function multiplication() {
  let inputs = getInputs();
  if (!inputs) return;
  let { value1, value2 } = inputs;
  result.innerHTML = `output : ${(value1 *= value2)}`;
}

function division() {
  let inputs = getInputs();
  if (!inputs) return;
  let { value1, value2 } = inputs;
  if (value2 == 0) {
    return alert("Division by zero is not possible");
  }
  result.innerHTML = `output : ${(value1 /= value2)}`;
}

function modulous() {
  let inputs = getInputs();
  if (!inputs) return;
  let { value1, value2 } = inputs;
  if (value2 == 0) {
    return alert("Division by zero is not possible");
  }
  result.innerHTML = `output : ${(value1 %= value2)}`;
}