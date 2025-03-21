//function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//function to change color of p tag with particular id
function changeColor(id) {
    const element = document.getElementById(id);
    if (element) {
        element.style.color = getRandomColor();
    }
}

//function to change bg colors of all p tags with classes
function changeBgColor(className){
    const elements = document.getElementsByClassName(className);
    if (elements.length > 0 ) {
        for( let i =0 ;i< elements.length ;i++){
            elements[i].style.backgroundColor = getRandomColor()            
        }
    }
}

//function to add text to span tags using innerHTML
function changeSpan(){
    const elements = document.getElementsByTagName('span')
    let text = "Hi, I am Dinath"
    if (elements.length > 0 ) {
        for( let i =0 ;i< elements.length ;i++){
            elements[i].innerHTML = text;          
        }
    }
}

//function to Toggle input tags
function toggleInput(){
    const elements = document.getElementsByTagName('input')
    if (elements.length > 0 ) {
        for( let i =0 ;i< elements.length ;i++){
            let isActive = elements[i].getAttribute('disabled')
            if(isActive == null){
                elements[i].setAttribute('disabled' ,true)
            }else{
                elements[i].removeAttribute('disabled')
            }
        }
    }
}

//function to add custom attributes
function addCustom() { 
    const elements = document.querySelectorAll('p[custom-attr]');  
    if (elements.length > 0 ) {
        for( let i =0 ;i< elements.length ;i++){
            elements[i].setAttribute('new-custom' ,`newValue-${i + 1}`)
            console.log(elements[i]);     
        }
    }
  }