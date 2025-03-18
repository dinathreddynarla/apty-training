function fibonacci(n) {
	if (n <= 1) return n;
	return fibonacci(n - 1) + fibonacci(n - 2);
}

function generateFibonacci() {
	let value = document.getElementById("number").value;
	let series = "";

	for (var i = 0; i < value; i++) {
		series += fibonacci(i) + " ";
	}

	document.getElementById("result").innerText = series;
}
