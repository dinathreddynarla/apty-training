
  document.getElementById('count-btn').addEventListener('click', ()=>{
    const firstLevelParents = Array.from(document.body.children);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous result

    firstLevelParents.forEach(parent => {
        const nestedElements = parent.querySelectorAll('*');  // Select all nested elements
        const count = nestedElements.length;
        
        if(count >0){
            const resultItem = document.createElement('p');
            resultItem.textContent = `${parent.tagName}: ${count} nested elements`;
            resultDiv.appendChild(resultItem);
        }
      }
    );

  });