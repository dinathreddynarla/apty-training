document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('table');

    table.addEventListener('click', (event) => {
        const button = event.target; // Get the button that has been clicked
        const row = button.closest('tr'); // Get the row that the button was clicked from

        if (button.classList.contains('up')) {
            const prevRow = row.previousElementSibling; // Get the row before the current row

            if (prevRow) {
                // Move the current row before the previous row (move up)
                row.parentNode.insertBefore(row, prevRow);
            }
        }

        if (button.classList.contains('down')) {
            const nextRow = row.nextElementSibling; // Get the row after the current row

            if (nextRow) {
                // Move the current row after the next row (move down)
                row.parentNode.insertBefore(nextRow, row);
            }
        }

        if (button.classList.contains('top')) {
            // Move the current row to the top of the table (insert before the first child of the table)
            row.parentNode.insertBefore(row, row.parentNode.firstChild);
        }

        if (button.classList.contains('bottom')) {
            // Move the current row to the bottom of the table (append it as the last child of the table)
            row.parentNode.appendChild(row);
        }
    });
});
