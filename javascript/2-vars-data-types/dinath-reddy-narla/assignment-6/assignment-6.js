const types = {
    stringExample: "Dinath",
    numberExample: 123,
    booleanExample: true,
    undefinedExample: undefined,
    nullExample: null,
    symbolExample: Symbol("id"),
    objectExample: { name: "Dinath", role: "ASD" }
  };
  
  const output = document.getElementById('template-literals');
  
  for (let key in types) {
    let value = types[key];
  
    if (typeof value === 'symbol') {
      value = value.toString();
    } 
    output.innerHTML += `<p><strong>${key}</strong>: ${value}</p>`;
  }
  
  