
document.getElementById('submit').addEventListener('click',()=>{
    let input = document.getElementById('input').value.trim();

    if(input === ""){
        document.getElementById('output').textContent = "Input should not be Empty";
        document.getElementById('output').style.color = 'red';
        return;
    }
    
    document.getElementById('output').textContent = `The first and last Charcters of Given String are : ${input[0]} ${input[input.length-1]}`;
    document.getElementById('output').style.color = 'green';


})