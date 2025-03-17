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
    console.log(value);
    
    typeConversion.innerHTML += `
      <b>${valueType} (${value}) Conversion:</b><br>
      To Number: ${Number(value)}<br>
      To Boolean: ${Boolean(value)}<br>
      To String: ${String(value)}<br><br>
    `;
  }
  
