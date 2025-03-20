
document.getElementById('submit').addEventListener('click',()=>{
    let input = document.getElementById('input').value.trim();

    if(input === ""){
        document.getElementById('output').textContent = "Input should not be Empty";
        document.getElementById('output').style.color = 'red';
        return;
    }
        
    document.getElementById('output').textContent  = input.split("").sort().join("");
    document.getElementById('output').style.color = 'green';


})