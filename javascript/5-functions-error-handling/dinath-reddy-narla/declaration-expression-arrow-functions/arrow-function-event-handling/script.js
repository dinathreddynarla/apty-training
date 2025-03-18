document.getElementById("update-count").addEventListener('click',()=>{
    let counter = document.getElementById("count");    
    counter.innerText = Number(counter.innerText)+1;
})