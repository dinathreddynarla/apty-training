
//Custom function to try to convert to each type and catch errors

function convertValue(valueType, value) {

  let conversionResults = `<b>${valueType} (${value}) Conversion:</b><br>`;

  // Convert to Number
  try {
    conversionResults += `To Number: ${Number(value)}<br>`;
  } catch (error) {
    conversionResults += `To Number: Error - ${error.message}<br>`;
  }

  // Convert to Boolean
  try {
    conversionResults += `To Boolean: ${Boolean(value)}<br>`;
  } catch (error) {
    conversionResults += `To Boolean: Error - ${error.message}<br>`;
  }

  // Convert to String
  try {
    conversionResults += `To String: ${String(value)}<br>`;
  } catch (error) {
    conversionResults += `To String: Error - ${error.message}<br>`;
  }

  // Convert to BigInt
  try {
    conversionResults += `To BigInt: ${BigInt(value)}<br>`;
  } catch (error) {
    conversionResults += `To BigInt: Error - ${error.message}<br>`;
  }

  // Convert to Date
  try {
    conversionResults += `To Date: ${new Date(value)}<br>`;
  } catch (error) {
    conversionResults += `To Date: Error - ${error.message}<br>`;
  }

  // Convert to Array
  try {
    conversionResults += `To Array: ${Array.from(value)}<br>`;
  } catch (error) {
    conversionResults += `To Array: Error - ${error.message}<br>`;
  }

  // Convert to Object
  try {
    conversionResults += `To Object: ${Object(value)}<br>`;
  } catch (error) {
    conversionResults += `To Object: Error - ${error.message}<br>`;
  }

  // Convert to JSON
  try {
    conversionResults += `To JSON: ${JSON.stringify(value)}<br>`;
  } catch (error) {
    conversionResults += `To JSON: Error - ${error.message}<br>`;
  }

  //append the results to the innerHTML
  typeConversion.innerHTML += `${conversionResults} <br>`;
}



const types = {
    stringExample: "Dinath",
    numberExample: 123,
    booleanExample: true,
    undefinedExample: undefined,
    nullExample: null,
    symbolExample: Symbol("id"),
    objectExample: { name: "Dinath", role: "ASD" }
  }
  

let typeConversion = document.getElementById('type-conversions')

for (let key in types) {
    let value = types[key];
    let valueType = typeof value;

    // Special handling for symbol because it cannot be converted to string easily
    if(valueType === "symbol"){
      value =  value.toString();
    }
    
    convertValue(valueType,value)
    
}    
  
