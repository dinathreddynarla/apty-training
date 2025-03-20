function combine(arr1, arr2) {
	return [...new Set([...arr1, ...arr2])];
}

document.getElementById("submit").addEventListener("click", () => {
    let input1 = document.getElementById("input1").value.trim();
    let input2 = document.getElementById("input2").value.trim();
    if (input1 === "" || input2 == "") {
        document.getElementById("output").textContent = "Error: Inputs should not be empty. Please provide valid arrays.";
        return;
    }

    // Error handling to check if inputs are proper valid arrays or not
    try {
        let inputArray1 = JSON.parse(input1);
        let inputArray2 = JSON.parse(input2);
        if (Array.isArray(inputArray1) && Array.isArray(inputArray2)) {
            let combinedArray = combine(inputArray1,inputArray2)   
            document.getElementById("output").textContent =`Combined Array : ${JSON.stringify(combinedArray)}`

        } else {
            // If the parsed inputs are not arrays like an object or any valid JSON
            throw new Error('Given inputs are not array. Please provide valid arrays.');
        }
    } catch (error) {
        document.getElementById("output").textContent = `Error: ${error.message}`
    }
})

