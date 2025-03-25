function findLargest() {
  let result = document.getElementById("result");
  let value1 = document.getElementById("value1").value;
  let value2 = document.getElementById("value2").value;
  let value3 = document.getElementById("value3").value;

  if (value1 == "" || value2 == "" || value3 == "") {
    result.innerText = `please fill all inputs`;
    return;
  }
  value1 = Number(value1);
  value2 = Number(value2);
  value3 = Number(value3);

  let largest = value1; //assuming value1 is largest

  if (value2 > largest) {
    largest = value2;
  }
  if (value3 > largest) {
    largest = value3;
  }

  result.innerText = `Largest Number is ${largest}`;
  return;
}
