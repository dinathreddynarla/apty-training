//function to deep merge both objects 
function deepMerge(obj1, obj2) {
	for (let key in obj2) {
		if (typeof obj2[key] === "object" && typeof obj1[key] === "object") {
			obj1[key] = deepMerge(obj1[key], obj2[key]);
		} else {
			obj1[key] = obj2[key];
		}
	}
	return obj1;
}

//fucntion to check if it is a proper valid object after parsing
function checkObj(obj){
	if(typeof obj == 'object' && !Array.isArray(obj)) return true;
	return false;
}

document.getElementById("merge").addEventListener("click", () => {
    let input1 = document.getElementById("input1").value.trim();
    let input2 = document.getElementById("input2").value.trim();

    if (input1 === "" || input2 === "") {
        document.getElementById("output").textContent = "Error: Inputs Should not be empty. Please provide valid Objects.";
		document.getElementById("output").style.color = "red";
        return;
    }

    // Error handling to check if it is a proper valid object or not
    try {
        let inputObject1 = JSON.parse(input1);
        let inputObject2 = JSON.parse(input2);

        if (checkObj(inputObject1) && checkObj(inputObject2)) {
			let result = deepMerge(inputObject1,inputObject2)
            document.getElementById("output").innerHTML = JSON.stringify(result);
			document.getElementById("output").style.color = "green";

        } else {
            // If the parsed input is not an array like an object or any valid JSON
            throw new Error('Given inputs are not objects. Please provide valid objects.');
        }
    } catch (error) {
        document.getElementById("output").textContent = `Error: ${error.message}`
		document.getElementById("output").style.color = "red";

    }
});

