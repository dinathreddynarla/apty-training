document.getElementById('my-form').addEventListener('submit', (event) => {
    event.preventDefault();  // Prevent the default form submission

    const textInput = document.getElementById('text-input');
    const numberInput = document.getElementById('number-input');
    const emailInput = document.getElementById('email-input');

    const resultDiv = document.getElementById('result')
    // Check if text input is valid (non-empty)
    const isTextValid = textInput.value.trim() !== '';

    // Check if number input is valid (non-empty and is a number)
    const isNumberValid = !isNaN(numberInput.value) && numberInput.value.trim() !== '';

    // Check if email input is valid (non-empty and matches a simple email pattern)
    const isEmailValid = /\S+@\S+\.\S+/.test(emailInput.value);


    if (isTextValid && isNumberValid && isEmailValid) {
        // If all fields are valid, submit the form
        resultDiv.innerText = "Form is valid. Submitting..."
        resultDiv.style.color = "green"
        setTimeout(()=>{
            event.target.submit(); // This submits the form
        },1500)

    } else {
        // If any field is invalid, show error
        resultDiv.innerText = "Please fill in all fields correctly!"
        resultDiv.style.color = "red"
    }
});
