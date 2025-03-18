function getConvertedValues(){
    const value1 = document.getElementById("value1").value;
	const value2 = document.getElementById("value2").value;
	const type1 = document.getElementById("type1").value;
	const type2 = document.getElementById("type2").value;

	const convertedValue1 = convertValue(value1, type1);
	const convertedValue2 = convertValue(value2, type2);

    return {convertedValue1 , convertedValue2}

}
// converting value to desired type
function convertValue(value, type) {	
	if (type === "number") {
		return Number(value);
	} else if (type === "boolean") {	
		if(isNaN(Number(value))){			
			return Boolean(value)
		}
		return Boolean(Number(value));
	} else {
		return value;
	}
}

function logicalAndAssign(){
    let {convertedValue1 , convertedValue2} = getConvertedValues()	
    convertedValue1 &&= convertedValue2;
	document.getElementById("result").innerText = `&&= : ${convertedValue1}`;
}

function logicalOrAssign(){
    let {convertedValue1 , convertedValue2} = getConvertedValues()
    convertedValue1 ||= convertedValue2;
	document.getElementById("result").innerText = `||= : ${convertedValue1}`;
}

function logicalNullishAssign(){
    let {convertedValue1 , convertedValue2} = getConvertedValues()
    convertedValue1 ??= convertedValue2;
	document.getElementById("result").innerText = `??= : ${convertedValue1}`;
}
