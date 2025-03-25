function calculateInterest() {
  let principal = document.getElementById("principal").value;
  let rate = document.getElementById("rate").value;
  let time = document.getElementById("time").value;
  let result = document.getElementById("result");
  if (principal == "" || rate == "" || time == "") {
    result.innerText = "Please fill all inputs";
    return;
  }
  principal = Number(principal);
  rate = Number(rate);
  time = Number(time);

  if (principal <= 0 || rate <= 0 || time <= 0) {
    result.innerText = "Please enter positive values for all fields.";
    return;
  }

  // Calculate Simple Interest
  let simpleInterest = (principal * rate * time) / 100;
  result.innerText = `The Simple Interest is: ${simpleInterest.toFixed(2)}`;
}
