document.getElementById('count-btn').addEventListener('click', function() {
    // Get all elements in the document
    const allElements = document.getElementsByTagName('*');
    console.log(allElements);
    
    // Create an object to store the count of each tag
    const tagCounts = {};

    for (let i = 0; i < allElements.length; i++) {
        // Increment the count for this tag
        let tagName = allElements[i].tagName;
        tagCounts[tagName] = (tagCounts[tagName] + 1 ) ||  1;
    }

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; 

    for (const tag in tagCounts) {
        outputDiv.innerHTML += `<p>${tag.toUpperCase()} count: ${tagCounts[tag]}</p>`;
    }
});
