 // Function to handle click event and convert the div to a textarea
 function handleDivClick(event) {
    const editableDiv = event.target.closest('.editable-div');
    const contentSpan = editableDiv.querySelector('.content');
    const pencilIcon = editableDiv.querySelector('.pencil-icon');

    if (contentSpan) {
      const textArea = document.createElement('textarea');
      textArea.value = contentSpan.textContent.trim();
      contentSpan.style.display = 'none';
      editableDiv.appendChild(textArea);
      textArea.focus();

      // When the textarea loses focus (onblur), save the content back to the div
      textArea.addEventListener('blur',function(){
        contentSpan.textContent = textArea.value.trim();
        contentSpan.style.display = 'inline';
        textArea.remove(); 
      });
    }
  }

  // MutationObserver to monitor DOM changes and add event listeners
  const observer = new MutationObserver(function(mutationsList) {
    mutationsList.forEach(function(mutation) {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(function(node) {
          if (node.nodeType === 1 && node.classList.contains('editable-div')) {
            node.addEventListener('click', handleDivClick);
          }
        });
      }
    });
  });

  // Observe the body for added elements
  observer.observe(document.body, { childList: true, subtree: true });

  // Initial event listener setup (for already existing editable div)
  document.querySelectorAll('.editable-div').forEach(function(editableDiv) {
    editableDiv.addEventListener('click', handleDivClick);
  });