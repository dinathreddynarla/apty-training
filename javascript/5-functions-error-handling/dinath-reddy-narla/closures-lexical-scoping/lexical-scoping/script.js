function concatString(val1, val2, val3) {
	function outer() {
		function middle() {
			function inner() {
				return val1 + val2 + val3;
			}

			return inner();
		}

		return middle();
	}

	return outer();
}

document.forms[0].addEventListener("submit", (e) => {
    e.preventDefault()
	const value1 = document.getElementById("value1").value;
	const value2 = document.getElementById("value2").value;
	const value3 = document.getElementById("value3").value;

	document.getElementById("output").innerHTML = concatString(value1, value2, value3);
});
