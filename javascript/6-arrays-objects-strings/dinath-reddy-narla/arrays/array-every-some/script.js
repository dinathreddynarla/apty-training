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
            let allPassed = inputArray.every(student => student.score>35)
            let somePassed = inputArray.some(student => student.score>35)

            if(allPassed){
                document.getElementById("output").textContent = 'All Students Passed'
            }else if(somePassed){
                document.getElementById("output").textContent = 'Some Students Passed'
            }    
        } else {
            // If the parsed input is not an array like an object or any valid JSON
            throw new Error('Given input is not an array of objects. Please provide a valid array of objects.');
        }
    } catch (error) {
        document.getElementById("output").textContent = `Error: ${error.message}`
    }
});
