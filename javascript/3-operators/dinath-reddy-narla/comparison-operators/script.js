function getConvertedValues(){
    const value1 = document.getElementById("value1").value;
	const value2 = document.getElementById("value2").value;
	const type1 = document.getElementById("type1").value;
	const type2 = document.getElementById("type2").value;
    if(value1.trim() == "" || value2.trim() == ""){
        return alert("please fill both inputs")
    }
	const convertedValue1 = convertValue(value1, type1);
	const convertedValue2 = convertValue(value2, type2);

    return {convertedValue1 , convertedValue2}

}
// converting value to desired type
function convertValue(value, type) {
	if (type === "number") {
		return Number(value);
	} else if (type === "boolean") {
		return Boolean(value);
	} else {
		return value;
	}
}

function compareEqual(){
    let {convertedValue1 , convertedValue2} = getConvertedValues()
    const result = convertedValue1 == convertedValue2;
	document.getElementById("result").innerText = `== : ${result}`;
}

function compareStrictEqual(){
    let {convertedValue1 , convertedValue2} = getConvertedValues()
    const result = convertedValue1 === convertedValue2;
	document.getElementById("result").innerText = `=== : ${result}`;
}

function compareNotEqual(){
    let {convertedValue1 , convertedValue2} = getConvertedValues()
    const result = convertedValue1 != convertedValue2;
	document.getElementById("result").innerText = `!= : ${result}`;
}

function compareStrictNotEqual(){
    let {convertedValue1 , convertedValue2} = getConvertedValues()
    const result = convertedValue1 !== convertedValue2;
	document.getElementById("result").innerText = `!== : ${result}`;
}

function compareGreaterThan(){
    let {convertedValue1 , convertedValue2} = getConvertedValues()
    const result = convertedValue1 > convertedValue2;
	document.getElementById("result").innerText = `>: ${result}`;
}

function compareLessThan(){
    let {convertedValue1 , convertedValue2} = getConvertedValues()
    const result = convertedValue1 < convertedValue2;
	document.getElementById("result").innerText = `< : ${result}`;
}

function compareGreaterThanOrEqual(){
    let {convertedValue1 , convertedValue2} = getConvertedValues()
    const result = convertedValue1 >= convertedValue2;
	document.getElementById("result").innerText = `>= : ${result}`;
}

function compareLessThanOrEqual(){
    let {convertedValue1 , convertedValue2} = getConvertedValues()
    const result = convertedValue1 <= convertedValue2;
	document.getElementById("result").innerText = `<= : ${result}`;
}