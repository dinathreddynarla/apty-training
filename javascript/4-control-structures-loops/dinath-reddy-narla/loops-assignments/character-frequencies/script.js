function calculateFrequencies() {
  let result = document.getElementById("result");
  let inputString = document.getElementById("input-string").value.trim();
  if (inputString == "") {
    result.innerHTML = "Error : Input should not be empty";
    return;
  }
  // using object to store the character count
  let frequencyObject = {};
  for (let i in inputString) {
    if (inputString[i] == " ") continue;
    frequencyObject[inputString[i]] = frequencyObject[inputString[i]] ? frequencyObject[inputString[i]] + 1 : 1;
  }

  for (let char in frequencyObject) {
    result.innerHTML += `Character : ${char} --> frequency : ${frequencyObject[char]} <br>`;
  }
}