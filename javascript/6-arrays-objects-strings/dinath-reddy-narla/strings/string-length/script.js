
document.getElementById('submit').addEventListener('click',()=>{
    let input = document.getElementById('input').value.trim();

    if(input === ""){
        document.getElementById('output').textContent = "Input should not be Empty";
        document.getElementById('output').style.color = 'red';
        return;
    }
    input = input.split(" ")
    for( let i in input){
        input[i] = input[i].length;
    }
    input = input.join(' ')
    document.getElementById('output').textContent = `The Length of Each Word in the given Output : ${input}`;
    document.getElementById('output').style.color = 'green';


})