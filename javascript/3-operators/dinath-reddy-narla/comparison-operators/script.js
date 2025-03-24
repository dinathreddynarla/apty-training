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

// Function to convert value to desired type with additional error handling
function convertValue(value, type) {
  switch (type) {
    case "number":
      // Handle conversion to number
      const num = Number(value);
      if (isNaN(num)) {
        throw new Error("Invalid number format");
      }
      return num;
    case "string":
      // Handle conversion to string
      const str = String(value);
      if (str === null || str === undefined) {
        throw new Error("Invalid string format: value is null or undefined.");
      }
      return str;
    case "boolean":
      // Handle conversion to boolean
      try {
        return Boolean(value);
      } catch (e) {
        throw new Error("Invalid boolean value. Use 'true' or 'false'.");
      }
    case "object":
      // Handle conversion to object
      try {
        return JSON.parse(value); // Parse as JSON to handle objects
      } catch (e) {
        throw new Error(
          "Invalid object format. Ensure the input is valid JSON."
        );
      }
    case "array":
      // Handle conversion to array
      try {
        const parsedArray = JSON.parse(value);
        if (Array.isArray(parsedArray)) {
          return parsedArray;
        } else {
          throw new Error(
            "Invalid array format. Ensure the input is valid JSON array."
          );
        }
      } catch (e) {
        throw new Error(
          "Invalid array format. Ensure the input is a valid JSON array."
        );
      }
    case "null":
      // Handle conversion to null
      if (value.toLowerCase() === "null") {
        return null;
      } else {
        throw new Error("Invalid value for null. Use 'null'.");
      }
    case "undefined":
      // Handle conversion to undefined
      if (value.toLowerCase() === "undefined") {
        return undefined;
      } else {
        throw new Error("Invalid value for undefined. Use 'undefined'.");
      }
    default:
      // If no specific type match, return the value as is (String)
      return value;
  }
}

function compareEqual() {
  let { convertedValue1, convertedValue2 } = getConvertedValues();
  result.innerText = `== : ${convertedValue1 == convertedValue2}`;
}

function compareStrictEqual() {
  let { convertedValue1, convertedValue2 } = getConvertedValues();
  result.innerText = `=== : ${convertedValue1 === convertedValue2}`;
}

function compareNotEqual() {
  let { convertedValue1, convertedValue2 } = getConvertedValues();
  result.innerText = `!= : ${convertedValue1 != convertedValue2}`;
}

function compareStrictNotEqual() {
  let { convertedValue1, convertedValue2 } = getConvertedValues();
  result.innerText = `!== : ${convertedValue1 !== convertedValue2}`;
}

function compareGreaterThan() {
  let { convertedValue1, convertedValue2 } = getConvertedValues();
  result.innerText = `>: ${convertedValue1 > convertedValue2}`;
}

function compareLessThan() {
  let { convertedValue1, convertedValue2 } = getConvertedValues();
  result.innerText = `< : ${convertedValue1 < convertedValue2}`;
}

function compareGreaterThanOrEqual() {
  let { convertedValue1, convertedValue2 } = getConvertedValues();
  result.innerText = `>= : ${convertedValue1 >= convertedValue2}`;
}

function compareLessThanOrEqual() {
  let { convertedValue1, convertedValue2 } = getConvertedValues();
  result.innerText = `<= : ${convertedValue1 <= convertedValue2}`;
}