function customFlatten(inputArray) {
    let result = [];

    inputArray.forEach(element => {
        if (Array.isArray(element)) {
            result = result.concat(customFlatten(element)); // Recursively flatten the array
        } else {
            result.push(element); // If it's not an array, push it to result
        }
    });

    return result;
}

document.getElementById("flatten").addEventListener('click', () => {
    let input = document.getElementById("input-array").value.trim();
    let outputElement = document.getElementById('output-array');

    try {
        let arr = JSON.parse(input);
       
        if (Array.isArray(arr)) {
            // If the parsed input is a valid array like not a object
            let result = customFlatten(arr);
            outputElement.innerText = `Flattened Array: ${JSON.stringify(result)}`;
        } else {
            // If the parsed input is not an array like an object or any valid json
            throw new Error('Given input is not an array. Please provide a valid array.');
        }
    } catch (error) {
        outputElement.innerText = `Error: ${error.message}`;
    }
});
