let result = document.getElementById("result");
function getConvertedValues() {
  const value1 = document.getElementById("value1").value.trim();
  const value2 = document.getElementById("value2").value.trim();
  const type1 = document.getElementById("type1").value;
  const type2 = document.getElementById("type2").value;

  if (value1 == "" || value2 == "") {
    return alert("Please fill both inputs");
  }

  try {
    const convertedValue1 = convertValue(value1, type1);
    const convertedValue2 = convertValue(value2, type2);
    return { convertedValue1, convertedValue2 };
  } catch (error) {
    result.innerText = `Error : ${error.message}`;
    result.style.color = "red";
    return null;
  }
}
// converting value to desired type
function convertValue(value, type) {
  switch (type) {
    case "number":
      const num = Number(value);
      if (isNaN(num)) {
        throw new Error("Invalid number format");
      }
      return num;

    case "boolean":
      if (value.toLowerCase() === "true") {
        return true;
      } else if (value.toLowerCase() === "false") {
        return false;
      }
      const numBool = Number(value);
      return Boolean(numBool);

    default:
      return value;
  }
}

function logicalAnd() {
  let { convertedValue1, convertedValue2 } = getConvertedValues();
  result.innerText = `&& : ${convertedValue1 && convertedValue2}`;
}

function logicalOr() {
  let { convertedValue1, convertedValue2 } = getConvertedValues();
  result.innerText = `|| : ${convertedValue1 || convertedValue2}`;
}

function logicalNot() {
  let { convertedValue1, convertedValue2 } = getConvertedValues();
  result.innerText = `!= : ${!convertedValue1} , ${!convertedValue2} `;
}