document.getElementById('submit').addEventListener('click',()=>{
    let name = document.getElementById('name').value.trim();
    let age = parseFloat(document.getElementById('age').value.trim());

    if(name === "" || age <= 0){
        document.getElementById('output').innerText = 'Enter proper inputs , name should not be empty and age should be greater than 0';
        document.getElementById('output').style.color = "red";
        return;
    }
    document.getElementById('output').innerText = `Hello, my name is ${name} and I am ${age} years old.`;
    document.getElementById('output').style.color = "green";
})