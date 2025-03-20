let obj = {}

//Adding Keys and Values to object
document.getElementById('add').addEventListener('click',()=>{
    let key = document.getElementById('key').value.trim();
    let value = document.getElementById('value').value.trim();

    if(key == "" || value == ""){
        document.getElementById('output').textContent = "inputs should not be empty"
        document.getElementById('output').style.color='red';
        return;         
    }
    //check if key already exists to update value else add key and value
    if(obj[key]){
        obj[key] = value;
        document.getElementById('output').textContent = `Key : ${key} already exists , value : ${value} updated successfully`
        document.getElementById('output').style.color='green';
    }else{
        obj[key] = value;
        document.getElementById('output').textContent = `Key : ${key} and value : ${value} added successfully`
        document.getElementById('output').style.color='green';
    }
})

//show object
document.getElementById('show').addEventListener('click' ,()=>{
    document.getElementById('output').textContent = `Object : ${JSON.stringify(obj)}`
    document.getElementById('output').style.color='green';
})