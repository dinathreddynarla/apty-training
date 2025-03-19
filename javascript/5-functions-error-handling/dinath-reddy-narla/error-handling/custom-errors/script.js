function calculate(num1, num2, operator) {
    // Check if both inputs are numbers
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
        throw new Error("Invalid number input. Both inputs must be numeric.");
    }
    
    // Check for supported operators
    if (!['+', '-', '*', '/'].includes(operator)) {
        throw new Error("Unsupported operator. Please use one of the following: +, -, *, /");
    }

    // Perform the calculation based on the operator
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                throw new Error("Division by zero is not allowed.");
            }
            result = num1 / num2;
            break;
        default:
            throw new Error("Unsupported operator. Please use one of the following: +, -, *, /");
    }

    return result;
}

// Add event listener to the Calculate button
document.getElementById('calculate-btn').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value.trim());
    const num2 = parseFloat(document.getElementById('num2').value.trim());
    const operator = document.getElementById('operator').value.trim();
    const resultElement = document.getElementById('result');

    // Clear previous result or error
    resultElement.textContent = '';

    try {
        // Call the calculate function and display the result
        const result = calculate(num1, num2, operator);
        resultElement.textContent = `Result: ${result}`;
        resultElement.style.color = 'green';
    } catch (error) {
        // Display error message if something goes wrong
        resultElement.textContent = `Error: ${error.message}`;
        resultElement.style.color = 'red';

    }
});