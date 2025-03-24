const iframe = document.getElementById('myIframe');
const sendMessageButton = document.getElementById('sendMessageToIframe');
const parentMessage = document.getElementById('parentMessage');

// Send a message to the iframe (child window) when the button is clicked
sendMessageButton.addEventListener('click', () => {
    iframe.contentWindow.postMessage({type: "parent-to-iframe" ,message :"Hello from parent!"}, '*');
});

// Listen for messages from the iframe (child window)
window.addEventListener('message', (event) => {
    // if (event.source === window) {
    //     return; // Ignore messages sent by this window (parent)
    // }
    // // Ensure the message is from the iframe
    // if (event.origin === window.location.origin && event.source === iframe.contentWindow) {
    //     console.log(event);
        
    //     parentMessage.textContent = `Message received in parent: ${event.data}`;
    // }
    
    if(event.data.type == "iframe-to-parent"){
        console.log(event.data);  
        parentMessage.textContent = `Message received in parent: ${event.data.message}`;
    }

});