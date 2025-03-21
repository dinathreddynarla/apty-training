//function to calculate Perimeter and Area
function calculate(length=10, breadth=5){
    let perimeter = 2*(length*breadth)
    function Area(){
        return length*breadth
    }
    let area = Area()

    return {perimeter , area}
}

document.getElementById("rectangle").addEventListener('submit' ,(e)=>{
    e.preventDefault()
    let length = parseFloat(document.getElementById('length').value) || undefined;
    let breadth = parseFloat(document.getElementById('breadth').value) || undefined;

    //Length should be always greater than Breadth in Rectangle
    if(length <= breadth) {
    document.getElementById("result").innerText = "length must be greater then breadth"
    return        
    }
    let {perimeter , area } = calculate(length,breadth)
    document.getElementById("result").innerText = `Perimeter is ${perimeter} and Area is ${area}`
})