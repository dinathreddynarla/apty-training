
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
            inputArray.splice(1,1,"Purple");
            inputArray.splice(inputArray.length-1,0,"Orange");
            inputArray.splice(2,1)
            document.getElementById("output").innerHTML += `The Modified Array is ${JSON.stringify(inputArray)}`;
        }else{
             // If the parsed input is not an array like an object or any valid json
             throw new Error('Given input is not an array. Please provide a valid array.');
        }
    }catch(error){
        document.getElementById("output").textContent = `Error : ${error.message}`;

    }
});
