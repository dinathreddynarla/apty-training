function generateTable() {
    let number = Number(document.getElementById("number").value);
    let result = document.getElementById("result");

    // Clear any previous result
    result.innerHTML = "";

    // Validate the input
    if (isNaN(number) || number <= 0) {
        result.innerHTML = "Please enter a valid positive number.";
        return;
    }

    // Create a table for the multiplication results
    let tableHTML = "<table border='1' style='border-collapse: collapse;'>";
    tableHTML += "<tr><th>Multiplication</th><th>Result</th></tr>";

    // Loop to generate the multiplication table
    for (let i = 1; i <= 10; i++) {
        tableHTML += `<tr><td>${number} x ${i}</td><td>${number * i}</td></tr>`;
    }

    tableHTML += "</table>";

    result.innerHTML = tableHTML;
}
