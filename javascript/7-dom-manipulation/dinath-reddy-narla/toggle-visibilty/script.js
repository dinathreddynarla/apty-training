let toggleNum = 0;
document.getElementById('toggle-btn').addEventListener('click', () => {
    let divElements = document.querySelectorAll('div');
    for (let i = 0; i < divElements.length; i++) {
        divElements[i].style.visibility = i === toggleNum ? "hidden" : "visible";
    }
    toggleNum = (toggleNum + 1) % divElements.length; 
});
