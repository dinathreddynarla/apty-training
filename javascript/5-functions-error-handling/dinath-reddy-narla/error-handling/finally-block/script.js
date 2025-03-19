// Predefined users object
const users = {
    "dinath": { "address": { "city": "Nandyal" } },
    "hari": { "address": { "city": "Hyderabad" } },
    "azar": { "address": { "city": "Banglore" } }
};

// Add event listener to button
document.getElementById('lookup').addEventListener('click', () => {
    const userName = document.getElementById('user-name-input').value.trim();
    const resultElement = document.getElementById('user-city');
    try {
        // Attempt to find the city of the user
        if (users[userName]) {
            const city = users[userName].address.city;
            resultElement.textContent = `City of ${userName}: ${city}`;
            resultElement.style.color = "green"; // Success
        } else {
            // If user name does not exist in the object
            throw new Error(`User "${userName}" not found.`);
        }
    } catch (error) {
        // Catch any error and display it
        resultElement.textContent = error.message;
        resultElement.style.color = "red"; // Error
    } finally {
        // This will execute no matter what (success or error)
        // Provide the default city value if there's an error or no input
        if (!users[userName]) {
            resultElement.textContent += ` Default city: Hyderabad`;
            resultElement.style.color = "blue"; // Default city display color
        }
    }

});