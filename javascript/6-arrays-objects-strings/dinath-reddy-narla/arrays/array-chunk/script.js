function generateChunks(arr , size){
    let result = []
	for (let i = 0; i < arr.length; i += size) {
		result.push(arr.slice(i, i + size));
	}

	return result;
} 


document.getElementById("submit").addEventListener("click", () => {
    let input = document.getElementById("input").value.trim();
    let size = parseFloat(document.getElementById('size').value)
    if (input === "") {
        document.getElementById("output").textContent = "Error: Input is empty. Please provide a valid array.";
        return;
    }
    if(size < 1){
        document.getElementById("output").textContent = "Error: chunk size should be more than zero.";
        return;
    }

    // Error handling to check if it is a proper valid array or not
    try {
        let inputArray = JSON.parse(input);
        if (Array.isArray(inputArray)) {
            let output = generateChunks(inputArray,size)
            document.getElementById("output").textContent = JSON.stringify(output) 
        } else {
            // If the parsed input is not an array like an object or any valid JSON
            throw new Error('Given input is not an array of objects. Please provide a valid array of objects.');
        }
    } catch (error) {
        document.getElementById("output").textContent = `Error: ${error.message}`
    }
});
