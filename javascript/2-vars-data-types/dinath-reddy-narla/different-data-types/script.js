const stringExample = "Dinath";
const numberExample = 123;
const booleanExample = true;
let undefinedExample;
const nullExample = null;
const symbolExample = Symbol("id");
const objectExample = { name: "Dinath", role: "ASD" };

let dataTypes = document.getElementById("data-types");
dataTypes.innerHTML = `
        <p>${stringExample} : ${typeof stringExample}</p>
        <p>${numberExample} : ${typeof numberExample}</p>
        <p>${booleanExample} : ${typeof booleanExample}</p>
        <p>${undefinedExample} : ${typeof undefinedExample}</p>
        <p>${nullExample} : ${typeof nullExample}</p>
        <p>${String(symbolExample)} : ${typeof symbolExample}</p>
        <p>${objectExample} : ${typeof objectExample}</p>`;