
function calculateArea(length=10, breadth=5){
    return length*breadth 
}

document.getElementById("area").addEventListener('submit' , (e)=>{
    e.preventDefault()
    let length = parseFloat(document.getElementById('length').value) || undefined;
    let breadth = parseFloat(document.getElementById('breadth').value) || undefined;
    if(length <= breadth) {
    document.getElementById("result").innerText = "length must be greater then breadth"
    return        
    }
    document.getElementById("result").innerText = `Area is ${calculateArea(length,breadth)}`

    

})