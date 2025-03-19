function createBankAccount(initialBalance) {
    // Private variable to store balance
    let balance = initialBalance;

    // Method to deposit money
    function deposit(amount) {
        if (amount <= 0 || isNaN(amount)) {
            return "Deposit amount must be greater than 0.";
        }
        balance += amount;
        return `Deposited $${amount}. New balance: $${balance}.`;
    }

    // Method to withdraw money
    function withdraw(amount) {
        if (amount <= 0 || isNaN(amount)) {
            return "Withdrawal amount must be greater than 0.";
        }
        if (amount > balance) {
            return "Insufficient balance.";
        }
        balance -= amount;
        return `Withdrew $${amount}. New balance: $${balance}.`;
    }

    // Method to check the current balance
    function checkBalance() {
        return `Current balance: $${balance}.`;
    }

    // Expose methods to interact with the bank account
    return {
        deposit: deposit,
        withdraw: withdraw,
        checkBalance: checkBalance
    };
}

// Create a new bank account with an initial balance of 1000
const myAccount = createBankAccount(1000);

// Add event listeners for user actions
document.getElementById('deposit-btn').addEventListener('click', () => {
    const depositAmount = parseFloat(document.getElementById('amount').value.trim());
    const resultElement = document.getElementById('result');
    
    // Deposit amount and display result
    const result = myAccount.deposit(depositAmount);
    resultElement.textContent = result;
});

document.getElementById('withdraw-btn').addEventListener('click', () => {
    const withdrawAmount = parseFloat(document.getElementById('amount').value.trim());
    const resultElement = document.getElementById('result');

    // Withdraw amount and display result
    const result = myAccount.withdraw(withdrawAmount);
    resultElement.textContent = result;
});

document.getElementById('checkBalance-btn').addEventListener('click', () => {
    const resultElement = document.getElementById('result');

    // Display current balance
    const result = myAccount.checkBalance();
    resultElement.textContent = result;
});
