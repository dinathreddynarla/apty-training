const keyDownDiv = document.getElementById('key-down');
const keyUpDiv = document.getElementById('key-up');

// KeyDown on window
window.addEventListener('keydown', (event) => {
  keyDownDiv.innerHTML += `<br>Key pressed: ${event.key} `;
});

// KeyUp on window
window.addEventListener('keyup', (event) => {
  keyUpDiv.innerHTML += `<br>Key released: ${event.key}`;
});
