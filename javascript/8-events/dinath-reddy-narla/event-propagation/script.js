// Event listener for Level 1 (Capture phase)
document.getElementById('level1').addEventListener('click',()=>{
alert('Capture phase: Level 1');
}, true); // true means capturing phase

// Event listener for Level 2 (Bubble phase)
document.getElementById('level2').addEventListener('click',()=>{
alert('Bubble phase: Level 2');
}); // default is bubble phase

// Event listener for Level 3 (Target phase)
document.getElementById('level3').addEventListener('click',()=>{
alert('Target phase: Level 3');
});