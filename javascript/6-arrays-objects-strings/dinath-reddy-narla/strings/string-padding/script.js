
document.getElementById('submit').addEventListener('click',()=>{
    let input = document.getElementById('input').value.trim();

    if(input === ""){
        document.getElementById('output').textContent = "Input should not be Empty";
        document.getElementById('output').style.color = 'red';
        return;
    }
    input = input.length > 10 ? input : "0".repeat(10-input.length)+input
    document.getElementById('output').textContent = input;
    document.getElementById('output').style.color = 'green';


})