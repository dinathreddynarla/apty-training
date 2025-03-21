function sumAndAverage() {
    let input = document.getElementById('number').value.trim();
    let numberArray = input.split(',');
    let result = document.getElementById("result");
    console.log(numberArray);
    
    // Check if the input is empty
    if (input === "") {
        result.innerText = "Error: input should not be empty";
        return;
    }

    let sum = 0;
    
    // check for each element in the array to check if it's a valid number
    for (let number of numberArray) {
        if(number.trim() == '') continue; // Number('') is returning 0 that won't affect sum but affects average
        let num = Number(number.trim());  // Convert to number and trim spaces
       console.log(num);
       
        if (isNaN(num)) {
            result.innerText = "Error: input contains invalid non-numeric values";
            return;
        } else {
            sum += num;
        }
    }

    let average = sum / numberArray.length;
    result.innerText = `The Sum is ${sum} and Average is ${average}`;
}
