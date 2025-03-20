
document.getElementById("swap").addEventListener("click",()=> {
	let a = parseInt(document.getElementById("a").value);
	let b = parseInt(document.getElementById("b").value);

	if (isNaN(a) || isNaN(b)) {
		document.getElementById("result").textContent = "Please enter valid numbers for both variables.";
		return;
	}
    // swapping using array destructuring
	[a, b] = [b, a];

	document.getElementById("result").textContent = `a = ${a}, b = ${b}`;
});
