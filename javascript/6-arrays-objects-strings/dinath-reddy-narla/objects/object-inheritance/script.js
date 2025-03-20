const person = {
	name: "Dinath Reddy",
};

const employee = Object.create(person);

employee.job = "Software Developer";

employee.greet = function () {
	document.getElementById("output").innerHTML = `Hello, ${this.name} the ${this.job}!`;
};

employee.greet();
