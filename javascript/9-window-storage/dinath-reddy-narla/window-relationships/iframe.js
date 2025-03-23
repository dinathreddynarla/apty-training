const sendMessageButton = document.getElementById('sendMessageToParent');
const iframeMessage = document.getElementById('iframeMessage');

// Send a message to the parent window when the button is clicked
sendMessageButton.addEventListener('click', () => {
    window.parent.postMessage('Hello from iframe!', '*');
});

// Listen for messages from the parent window
window.addEventListener('message', (event) => {
        iframeMessage.textContent = `Message received in iframe: ${event.data}`;
});