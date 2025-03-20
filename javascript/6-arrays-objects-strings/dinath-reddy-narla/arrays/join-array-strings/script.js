function joinArray(arr) {
	const str = arr.join(" ");

	return str.slice(0, 1).toUpperCase() + str.slice(1);
}

document.getElementById("submit").addEventListener("click", () => {
	let input = document.getElementById("input").value.trim();
    if (input === "") {
        document.getElementById("output").textContent = "Error: Input is empty. Please provide a valid array.";
        return;
    }
        //Error handling to check if it is a proper valid array or not
    try{
       let inputArray = JSON.parse(input)
        if(Array.isArray(inputArray)){
            document.getElementById("output").textContent = joinArray(inputArray);
        }else{
             // If the parsed input is not an array like an object or any valid json
             throw new Error('Given input is not an array. Please provide a valid array.');
        }
    }catch(error){
        document.getElementById("output").textContent = `Error : ${error.message}`;

    }
});
