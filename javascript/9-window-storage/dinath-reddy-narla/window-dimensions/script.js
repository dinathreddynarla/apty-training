const resizeInfo = document.getElementById('resize-info');
        
function updateInfo() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const screenWidth = screen.width;
    const screenHeight = screen.height;
    const availWidth = screen.availWidth;
    const availHeight = screen.availHeight;

    resizeInfo.innerHTML = `Window Width: ${width}px <br><br>
    Window Height: ${height}px <br><br>
    Screen Width: ${screenWidth}px <br><br>
    Screen Height: ${screenHeight}px <br><br>
    Available Screen Width: ${availWidth}px <br><br>
    Available Screen Height: ${availHeight}px`;
}

window.addEventListener('resize', updateInfo);
updateInfo();