window.onload = ()=>{

const iframe = document.querySelector('iframe');
const iframeDocument = iframe.contentWindow.document; // Get the document inside iframe

// Function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change color of given id using random color generator
function changeColor(id) {
    const element = iframeDocument.getElementById(id);  // Target element inside iframe
    if (element) {
        element.style.color = getRandomColor();
    }
}

document.getElementById('change-color-1').addEventListener('click',()=>{changeColor('para1')})
document.getElementById('change-color-2').addEventListener('click',()=>{changeColor('para2')})
document.getElementById('change-color-3').addEventListener('click',()=>{changeColor('para3')})

// Function to change background colors of all p tags with classes inside iframe
document.getElementById('change-bgcolor').addEventListener('click',()=>{
    const elements = iframeDocument.getElementsByClassName('paraClass');  // Target elements inside iframe
    if (elements.length > 0) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = getRandomColor();
        }
    }
})

// Function to add text to span tags inside iframe using innerHTML
document.getElementById('change-span').addEventListener('click',()=>{
    const elements = iframeDocument.getElementsByTagName('span');
    const text = "Hi, I am Dinath";
    if (elements.length > 0) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].innerHTML = text;
        }
    }
})

// Function to toggle input tags inside iframe
document.getElementById('toggle-input').addEventListener('click',()=>{
    const elements = iframeDocument.getElementsByTagName('input');
    if (elements.length > 0) {
        for (let i = 0; i < elements.length; i++) {
            let isActive = elements[i].getAttribute('disabled');
            if (isActive === null) {
                elements[i].setAttribute('disabled', true);
            } else {
                elements[i].removeAttribute('disabled');
            }
        }
    }
})

// Function to add custom attributes to p tags inside iframe
document.getElementById('add-custom').addEventListener('click',()=>{
    const elements = iframeDocument.querySelectorAll('p[custom-attr]');  // Select p tags with custom-attr
    if (elements.length > 0) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].setAttribute('new-custom', `newValue-${i + 1}`);
            console.log(elements[i]);
        }
    }
}
)

}

