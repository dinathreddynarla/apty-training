//Function to set a cookie
function setCookie() {
    const name = document.getElementById("cookieName").value;
    const value = document.getElementById("cookieValue").value;
    const days = document.getElementById("cookieDays").value;

    if (name && value) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Set expiration date
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
        alert("Cookie set!");
    } else {
        alert("Please provide both name and value for the cookie.");
    }
}

// Function to read a cookie
function getCookie() {
    const name = document.getElementById("cookieNameRead").value;
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    let cookieValue = "Cookie not found";

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) {
            cookieValue = c.substring(nameEQ.length, c.length);
            break;
        }
    }
    document.getElementById("cookieValueRead").innerText = "Cookie Value: " + cookieValue;
}

// Function to delete a cookie
function deleteCookie() {
    const name = document.getElementById("cookieNameDelete").value;
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    alert("Cookie deleted!");
}