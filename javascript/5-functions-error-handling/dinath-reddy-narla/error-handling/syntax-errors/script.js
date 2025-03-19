function parseJSON(jsonString) {
    try {
        // Attempt to parse the JSON string
        const parsedObject = JSON.parse(jsonString);
        return { success: true, message: parsedObject };
    } catch (error) {
        // Return the error message directly from the exception
        return { success: false, message: `Error: ${error.message}` };
    }
}


document.getElementById('parse').addEventListener('click',()=>{
    let jsonInput = document.getElementById('json-input').value.trim();
    const output = parseJSON(jsonInput);
    
    const resultElement = document.getElementById('result');
    if (output.success) {
        resultElement.innerText = 'Parsed Object: ' + JSON.stringify(output.data, null, 2);
        resultElement.style.color = 'green';
    } else {
        resultElement.innerText = output.message;
        resultElement.style.color = 'red'; 
    }

})