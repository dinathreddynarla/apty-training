const types = {
  stringExample: "Dinath",
  numberExample: 123,
  booleanExample: true,
  undefinedExample: undefined,
  nullExample: null,
  symbolExample: Symbol("id"),
  objectExample: { name: "Dinath", role: "ASD" },
};

let typeCoercion = document.getElementById("type-coercion");

// looping through object to add all possible data types
for (let key1 in types) {
  for (let key2 in types) {
    const value1 = types[key1];
    const value2 = types[key2];
    if (key1 == key2) continue; // avoiding adding of same types
    try {
      typeCoercion.innerHTML += `<p> Addition of ${key1} + ${key2}: ${value1 + value2}</p>`;
    } catch (error) {
      typeCoercion.innerHTML += `<p>Error adding ${key1} + ${key2}: ${error.message}</p>`;
    }
  }
}