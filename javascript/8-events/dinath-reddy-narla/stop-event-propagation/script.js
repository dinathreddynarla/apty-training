
//Parent Event
document.getElementById('parent').addEventListener('click' , ()=>{
    alert('Parent Div is Clicked')
})

//Child Even
document.getElementById('child').addEventListener('click' , (event)=>{
    alert('child Div is Clicked')
    event.stopPropagation()
})