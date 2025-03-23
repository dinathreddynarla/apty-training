const iframe = document.getElementById('myIframe');
const sendMessageButton = document.getElementById('sendMessageToIframe');
const parentMessage = document.getElementById('parentMessage');

// Send a message to the iframe (child window) when the button is clicked
sendMessageButton.addEventListener('click', () => {
    iframe.contentWindow.postMessage('Hello from parent!', '*');
});

// Listen for messages from the iframe (child window)
window.addEventListener('message', (event) => {
    if (event.source === window) {
        return; // Ignore messages sent by this window (parent)
    }
    // Ensure the message is from the iframe
    if (event.origin === window.location.origin && event.source === iframe.contentWindow) {
        parentMessage.textContent = `Message received in parent: ${event.data}`;
    }

});