// Create shadow DOM and attach it to the host
const shadowHost = document.getElementById('shadow-host');
const shadowRoot = shadowHost.attachShadow({mode: 'open'});

// Inject HTML and CSS into the shadow DOM
const htmlContent = `
  <table>
    <thead>
        <tr>
            <th>id</th>
            <th>className</th>
            <th>tag</th>
            <th>name</th>
            <th>attribute</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p id="para1">This is paragraph 1.</p>
                <button onclick="changeColor('para1')">Change Color</button>
            </td>
            <td>
                <p class="paraClass">This is paragraph class 1</p>
            </td>
            <td><span></span></td>
            <td><input type="text" name="input1"></td>
            <td><p custom-attr="custom-attr-1">This is custom paragraph 1</p></td>
        </tr>
        <tr>
            <td>
                <p id="para2">This is paragraph 2.</p>
                <button onclick="changeColor('para2')">Change Color</button>
            </td>
            <td>
                <p class="paraClass">This is paragraph class 2</p>
            </td>
            <td><span></span></td>
            <td><input type="text" name="input2"></td>
            <td><p custom-attr="custom-attr-2">This is custom paragraph 2</p></td>
        </tr>
        <tr>
            <td>
                <p id="para3">This is paragraph 3.</p>
                <button onclick="changeColor('para3')">Change Color</button>
            </td>
            <td>
                <p class="paraClass">This is paragraph class 3</p>
            </td>
            <td><span></span></td>
            <td><input type="text" name="input3"></td>
            <td><p custom-attr="custom-attr-3">This is custom paragraph 3</p></td>
        </tr>
    </tbody>
  </table>
`;

// Add CSS to Shadow DOM
const cssContent = `
  table {
    width: 100%;
    border-collapse: collapse;
}
table, th, td {
    border: 1px solid black;
}
th, td {
    padding: 10px;
    text-align: center;
}
button {
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
}
`;

shadowRoot.innerHTML = `<style>${cssContent}</style>${htmlContent}`;

// Function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change color of p tag with particular id
function changeColor(id) {
    const element = shadowRoot.getElementById(id);
    if (element) {
        element.style.color = getRandomColor();
    }
}

// Function to change bg colors of all p tags with classes
function changeBgColor(className) {
    const elements = shadowRoot.querySelectorAll(`.${className}`);
    if (elements.length > 0) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = getRandomColor();
        }
    }
}

// Function to add text to span tags inside shadow DOM
function changeSpan() {
    const elements = shadowRoot.getElementsByTagName('span');
    let text = "Hi, I am Dinath";
    if (elements.length > 0) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].innerHTML = text;
        }
    }
}

// Function to toggle input tags
function toggleInput() {
    const elements = shadowRoot.querySelectorAll('input');
    if (elements.length > 0) {
        for (let i = 0; i < elements.length; i++) {
            let isActive = elements[i].getAttribute('disabled');
            if (isActive == null) {
                elements[i].setAttribute('disabled', true);
            } else {
                elements[i].removeAttribute('disabled');
            }
        }
    }
}

// Function to add custom attributes inside shadow DOM
function addCustom() {
    const elements = shadowRoot.querySelectorAll('p[custom-attr]');
    if (elements.length > 0) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].setAttribute('new-custom', `newValue-${i + 1}`);
            console.log(elements[i]);
        }
    }
}
