function checkAge() {
  let firstName = document.getElementById("first-name").value.trim();
  let lastName = document.getElementById("last-name").value.trim();
  let age = document.getElementById("age").value;

  if (firstName == "" || lastName == "" || age == "") {
    return alert("please fill all inputs");
  }

  let result = age >= 18 ? `Hello ${firstName} ${lastName} Welcome to Apty` : `Hello ${firstName} ${lastName} comeback after ${18 - age} years`;
  document.getElementById("result").innerText = result;
}