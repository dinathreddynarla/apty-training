
const myTable = document.getElementById('my-table')

//creating 10 rows and 10 columns dynamically
for(let row = 0 ;row < 10 ;row++){
    let tr = document.createElement('tr');
    for(let col = 0;col < 10;col++){
        let td = document.createElement('td')
        tr.appendChild(td)
    }
    myTable.appendChild(tr)
}

// Highlight row and column
function highlightRowColumn(event) {
    const target = event.target;
    console.log(target);
    

    if (target.tagName === 'TD') {
        const row = target.parentElement;
        const colIndex = target.cellIndex;        
        const table = target.closest('table');

        // Highlight row
        Array.from(row.children).forEach(cell => cell.classList.add('highlight-row'));

        // Highlight column
        Array.from(table.rows).forEach(row => row.cells[colIndex].classList.add('highlight-column'));
    }
}

function removeHighlight(event) {
    const target = event.target;

    if (target.tagName === 'TD') {
        const row = target.parentElement;
        const colIndex = target.cellIndex;
        const table = target.closest('table');

        // Remove row highlight
        Array.from(row.children).forEach(cell => cell.classList.remove('highlight-row'));

        // Remove column highlight
        Array.from(table.rows).forEach(row => row.cells[colIndex].classList.remove('highlight-column'));
    }
}

// Event listeners for mouseover and mouseout
myTable.addEventListener('mouseover', highlightRowColumn);
myTable.addEventListener('mouseout', removeHighlight);

