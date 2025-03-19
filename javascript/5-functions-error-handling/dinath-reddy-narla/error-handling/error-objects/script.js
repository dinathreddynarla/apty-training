function withdrawAmount(balance, withdrawalAmount) {
    // Check if withdrawal amount exceeds the balance
    if (withdrawalAmount > balance) {
        // Create a custom error object
        const error = {
            errorCode: 1001,
            errorMessage: "Insufficient balance. Withdrawal amount exceeds current balance."
        };
        throw error;  // Throw the custom error
    }
    
    // If successful, update balance
    balance -= withdrawalAmount;
    return balance;
}

document.getElementById('withdraw-btn').addEventListener('click', () => {
    const balance = parseFloat(document.getElementById('balance').value.trim());
    const withdrawalAmount = parseFloat(document.getElementById('withdrawalAmount').value.trim());
    const resultElement = document.getElementById('result');

    resultElement.textContent = '';

    try {
        // Call the withdrawAmount function and display the result
        const newBalance = withdrawAmount(balance, withdrawalAmount);
        resultElement.textContent = `Withdrawal successful! New balance: ${newBalance}`;
        resultElement.style.color = 'green';
    } catch (error) {
        // Display error details if an error is thrown
        resultElement.innerHTML = `Error Code: ${error.errorCode} <br> Error Message: ${error.errorMessage}`;
        resultElement.style.color = 'red';

    }
});
