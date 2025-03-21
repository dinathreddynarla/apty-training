const shadowHost = document.getElementById('host')
const shadowRoot = shadowHost.attachShadow({mode:'open'})

const htmlContent = `
    <table id="table">
        <tr>
            <td>row 1</td>
            <td><button class="up">up</button></td>
            <td><button class="down">down</button></td>
            <td><button class="top">top</button></td>
            <td><button class="bottom">bottom</button></td>
        </tr>
        <tr>
            <td>row 2</td>
            <td><button class="up">up</button></td>
            <td><button class="down">down</button></td>
            <td><button class="top">top</button></td>
            <td><button class="bottom">bottom</button></td>
        </tr>
        <tr>
            <td>row 3</td>
            <td><button class="up">up</button></td>
            <td><button class="down">down</button></td>
            <td><button class="top">top</button></td>
            <td><button class="bottom">bottom</button></td>
        </tr>
        <tr>
            <td>row 4</td>
            <td><button class="up">up</button></td>
            <td><button class="down">down</button></td>
            <td><button class="top">top</button></td>
            <td><button class="bottom">bottom</button></td>
        </tr>
        <tr>
            <td>row 5</td>
            <td><button class="up">up</button></td>
            <td><button class="down">down</button></td>
            <td><button class="top">top</button></td>
            <td><button class="bottom">bottom</button></td>
        </tr>
        <tr>
            <td>row 6</td>
            <td><button class="up">up</button></td>
            <td><button class="down">down</button></td>
            <td><button class="top">top</button></td>
            <td><button class="bottom">bottom</button></td>
        </tr>
        <tr>
            <td>row 7</td>
            <td><button class="up">up</button></td>
            <td><button class="down">down</button></td>
            <td><button class="top">top</button></td>
            <td><button class="bottom">bottom</button></td>
        </tr>
        <tr>
            <td>row 8</td>
            <td><button class="up">up</button></td>
            <td><button class="down">down</button></td>
            <td><button class="top">top</button></td>
            <td><button class="bottom">bottom</button></td>
        </tr>
        <tr>
            <td>row 9</td>
            <td><button class="up">up</button></td>
            <td><button class="down">down</button></td>
            <td><button class="top">top</button></td>
            <td><button class="bottom">bottom</button></td>
        </tr>
        <tr>
            <td>row 10</td>
            <td><button class="up">up</button></td>
            <td><button class="down">down</button></td>
            <td><button class="top">top</button></td>
            <td><button class="bottom">bottom</button></td>
        </tr>
    </table>
`
const styleContent = `
    table {
        width: 60%;
        margin: 20px auto;
        border-collapse: collapse;
    }
    td {
        padding: 10px;
        text-align: center;
        border: 1px solid #ddd;
    }
    button {
        margin: 5px;
        padding: 5px 10px;
    }  
`

shadowRoot.innerHTML = `<style>${styleContent}</style>${htmlContent}`

const table = shadowRoot.querySelector('table'); // Accessing table from shadowDOM using shadowRoot

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
