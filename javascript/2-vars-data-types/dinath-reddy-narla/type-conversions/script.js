//Helper Function to access all conversions
function convertValueHelper(ConversionFn, value, typeName) {
  try {
    return `${typeName}: ${ConversionFn(value)}<br>`;
  } catch (error) {
    return `${typeName}: Error - ${error.message}<br>`;
  }
}

//Custom function to try to convert to each type and catch errors
function convertValue(valueType, value) {
  const conversionTypes = [
    { fn: Number, name: "To Number" },
    { fn: Boolean, name: "To Boolean" },
    { fn: String, name: "To String" },
    { fn: BigInt, name: "To BigInt" },
    { fn: (v) => new Date(v), name: "To Date" },
    { fn: (v) => Array.from(v), name: "To Array" },
    { fn: (v) => Object(v), name: "To Object" },
    { fn: (v) => JSON.stringify(v), name: "To JSON" },
  ];

  let conversionResults = `<b>${valueType} (${value}) Conversion:</b><br>`;
  //calling helper function to do each conversion , except self conversion
  conversionTypes.forEach(({ fn, name }) => {
    if (name.toLowerCase().includes(valueType.toLowerCase())) {
      return;
    } else {
      conversionResults += convertValueHelper(fn, value, name);
    }
  });
  return conversionResults;
}

const types = {
  stringExample: "Dinath",
  numberExample: 123,
  booleanExample: true,
  undefinedExample: undefined,
  nullExample: null,
  symbolExample: Symbol("id"),
  objectExample: { name: "Dinath", role: "ASD" },
};

let typeConversion = document.getElementById("type-conversions");

for (let key in types) {
  let value = types[key];
  let valueType = typeof value;

  // Special handling for symbol because it cannot be converted to string easily
  if (valueType === "symbol") {
    value = value.toString();
  }
  typeConversion.innerHTML += convertValue(valueType, value);
}