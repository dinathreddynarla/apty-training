function sortArray(arr, key) {
	return arr.sort(function (a, b) {
		if (a[key] < b[key]) return 1;
		if (a[key] > b[key]) return -1;
		return 0;
	});
}
document.getElementById("submit").addEventListener("click", () => {
    let input = document.getElementById("input").value.trim();
    if (input === "") {
        document.getElementById("output").textContent = "Error: Input is empty. Please provide a valid array.";
        return;
    }

    // Error handling to check if it is a proper valid array or not
    try {
        let inputArray = JSON.parse(input);
        if (Array.isArray(inputArray)) {
            let sortedArray = sortArray(inputArray , 'score')    
            document.getElementById("output").textContent =`Sorted Array : ${JSON.stringify(sortedArray)}`

        } else {
            // If the parsed input is not an array like an object or any valid JSON
            throw new Error('Given input is not an array of objects. Please provide a valid array of objects.');
        }
    } catch (error) {
        document.getElementById("output").textContent = `Error: ${error.message}`
    }
});

