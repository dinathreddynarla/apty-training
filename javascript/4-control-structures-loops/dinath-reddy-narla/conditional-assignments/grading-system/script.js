function checkGrade() {
    let marks = document.getElementById("marks").value;
    marks = Number(marks);

    // Check if marks are a positive number
    if (marks < 0) {
        document.getElementById("result").innerText = 'Marks should be a positive number';
        return;
    }

    // Determine the grade
    let result = document.getElementById("result");
    if (marks >= 90) {
        result.innerText = 'Grade A';
    } else if (marks >= 75 && marks <= 89) {
        result.innerText = 'Grade B';
    } else if (marks >= 50 && marks <= 74) {
        result.innerText = 'Grade C';
    } else {
        result.innerText = 'Grade F';
    }
}
