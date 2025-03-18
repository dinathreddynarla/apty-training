function calculateInterest() {

    let principal = Number(document.getElementById("principal").value);
    let rate = Number(document.getElementById("rate").value);
    let time = Number(document.getElementById("time").value);
    let result = document.getElementById("result");

    
    if (principal <= 0 || rate <= 0 || time <= 0) {
        result.innerText = "Please enter valid values for all fields.";
        return;
    }

    // Calculate Simple Interest
    let simpleInterest = (principal * rate * time) / 100;

    result.innerText = `The Simple Interest is: ${simpleInterest.toFixed(2)}`;
}
