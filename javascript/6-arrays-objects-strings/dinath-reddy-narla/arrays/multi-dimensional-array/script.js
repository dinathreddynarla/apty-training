function transposeMatrix(matrix) {
	const rows = matrix.length;
	const cols = matrix[0].length;

	let transposed = [];

	for (let i = 0; i < cols; i++) {
		transposed[i] = [];
		for (let j = 0; j < rows; j++) {
			transposed[i][j] = matrix[j][i];
		}
	}

	return transposed;
}

document.getElementById("submit").addEventListener("click", () => {
    let input = document.getElementById("input").value.trim();
    if (input === "") {
        document.getElementById("result").textContent = "Error: Input is empty. Please provide a valid Matrix.";
        return;
    }

    // Error handling to check if it is a proper matrix format or not
    try {
        let inputArray = JSON.parse(input);

		if (!Array.isArray(inputArray) || !Array.isArray(inputArray[0])) {
			throw new Error("Invalid matrix format");
		} 
        let transposed = transposeMatrix(inputArray);
        document.getElementById("result").textContent = JSON.stringify(transposed, null, 2);


    } catch (error) {
        document.getElementById("result").textContent = `Error: ${error.message}`
    }
});
