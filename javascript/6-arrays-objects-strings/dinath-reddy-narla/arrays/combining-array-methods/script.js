function generate(arr){
    //apply filter to get even number
    //apply map to double resulted even number
    //apply reduce to sum all resulted double values
    let result = arr.filter(num => num%2==0).map(num => num*2).reduce((sum,num)=>sum+num,0)
    return result
}

document.getElementById("submit").addEventListener("click", () => {
    let input = document.getElementById("input").value.trim();
    if (input === "") {
        document.getElementById("output").textContent = "Error: Input is empty. Please provide a valid array.";
        return;
    }

    // Error handling to check if it is a proper valid array or not
    try {
        let inputArray = JSON.parse(input);
        if (Array.isArray(inputArray)) {
            let result = generate(inputArray)    
            document.getElementById("output").textContent =`Result : ${result}`

        } else {
            // If the parsed input is not an array like an object or any valid JSON
            throw new Error('Given input is not an array. Please provide a valid array.');
        }
    } catch (error) {
        document.getElementById("output").textContent = `Error: ${error.message}`
    }
});