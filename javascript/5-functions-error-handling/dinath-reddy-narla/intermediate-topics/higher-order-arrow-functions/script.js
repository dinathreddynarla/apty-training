function repeatAction(max, cb) {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	cb(arr, max);
}

document.getElementById("filterForm").addEventListener("submit",(e) => {
		e.preventDefault();
		const max = parseInt(document.getElementById("maxValue").value);
		repeatAction(max, (arr, max) => {
			const filteredArr = arr.filter((element) => element <= max);
			document.getElementById("result").innerText = `Filtered Array: ${filteredArr}`;
		});
	});
