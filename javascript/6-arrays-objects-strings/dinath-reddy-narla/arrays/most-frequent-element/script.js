function mostFrequent(arr){
    //generating frquency map
        const frequencyMap = arr.reduce((map, num) => {
          map[num] = (map[num] || 0) + 1;
          return map;
        }, {});
        
        return Object.keys(frequencyMap).reduce((a, b) => 
          frequencyMap[a] > frequencyMap[b] ? a : b
        );
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
            let output = mostFrequent(inputArray)
            document.getElementById("output").textContent = `Most Frequent Element is ${output}`
        } else {
            // If the parsed input is not an array like an object or any valid JSON
            throw new Error('Given input is not an array of objects. Please provide a valid array of objects.');
        }
    } catch (error) {
        document.getElementById("output").textContent = `Error: ${error.message}`
    }
});
