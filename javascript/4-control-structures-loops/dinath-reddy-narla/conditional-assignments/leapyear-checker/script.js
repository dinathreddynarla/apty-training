function checkLeapYear() {
  let result = document.getElementById("result");
  let year = document.getElementById("year").value;
  if (year == "") {
    result.innerText = "input should not be empty";
    return;
  }
  year = Number(year);

  // Check if marks are a positive number
  if (year < 0) {
    result.innerText = "year should be a positive number";
    return;
  }

  // Determine the grade
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    result.innerText = `${year} is a Leap Year`;
  } else {
    result.innerText = `${year} is not a Leap Year`;
  }
}
