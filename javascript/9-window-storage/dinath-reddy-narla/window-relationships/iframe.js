const sendMessageButton = document.getElementById('sendMessageToParent');
const iframeMessage = document.getElementById('iframeMessage');
console.log(window.top == window);

// Send a message to the parent window when the button is clicked
sendMessageButton.addEventListener('click', () => {
    window.parent.postMessage({type: "iframe-to-parent" ,message :"Hello from Iframe!"}, '*');
});

// Listen for messages from the parent window
window.addEventListener('message', (event) => {
        iframeMessage.textContent = `Message received in iframe: ${event.data.message}`;
});