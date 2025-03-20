
document.getElementById('submit').addEventListener('click',()=>{
    let input = document.getElementById('input').value.trim();

    if(input === ""){
        document.getElementById('output').textContent = "Input should not be Empty";
        document.getElementById('output').style.color = 'red';
        return;
    }
    let result = []
    for( let i in input){
        result[i] = input.charCodeAt(i);
    }
    document.getElementById('output').textContent = JSON.stringify(result);
    document.getElementById('output').style.color = 'green';


})