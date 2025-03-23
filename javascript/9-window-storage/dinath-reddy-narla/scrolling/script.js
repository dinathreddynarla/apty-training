// Function to scroll to given position
function scrollToPosition() {
    const x = document.getElementById("xPosition").value;
    const y = document.getElementById("yPosition").value;
    window.scrollTo(Number(x), Number(y));
}

// Function to scroll up by 10px
function scrollUp() {
    window.scrollBy(0, -10);
}

// Function to scroll down by 10px
function scrollDown() {
    window.scrollBy(0, 10);
}