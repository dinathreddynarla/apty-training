document.getElementById('update-btn').addEventListener('click',()=>{
    const listItems = document.querySelectorAll('ul li')
    listItems[1].textContent = "Updated List Item"
    listItems[3].textContent = "Updated List Item"
    
})