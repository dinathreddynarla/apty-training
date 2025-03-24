// Handling var in the var-result section
const varResult = document.getElementById("var-result");

var varExample = "This is var declaration";
varResult.innerHTML += `<p>${varExample}</p>`;

var varExample = "This is var redeclaration"; // Redeclaration allowed with var
varResult.innerHTML += `<p>${varExample}</p>`;

varExample = "This is var reassigning"; // Reassignment allowed with var
varResult.innerHTML += `<p>${varExample}</p>`;

// Handling let in the let-result section
const letResult = document.getElementById("let-result");

// Declare a `let` variable
let letExample = "This is Let declaration";
letResult.innerHTML += `<p>${letExample}</p>`;

// Attempt to redeclare a `let` variable in the same scope
try {
  eval("let a = 10; let a = 20;");
} catch (e) {
  letResult.innerHTML += `<p>Trying let redeclaration</p>`;
  letResult.innerHTML += `<p style="color:red;">Error : ${e.message}</p>`;
}

// Reassign a `let` variable (this is valid)
letExample = "This is Let reassigning"; // Reassigning is allowed
letResult.innerHTML += `<p>${letExample}</p>`;

// Handling const in the const-result section
const constResult = document.getElementById("const-result");

// Declare a `const` variable
const constExample = "This is Const declaration";
constResult.innerHTML += `<p>${constExample}</p>`;

// Attempt to redeclare a `const` variable in the same scope
try {
  eval("const a = 10; const a = 20;");
} catch (e) {
  constResult.innerHTML += `<p>Trying const redeclaration</p>`;
  constResult.innerHTML += `<p style="color:red;">Error : ${e.message}</p>`;
}

// Attempt to reassign a `const` variable
try {
  eval("const a = 10; a = 20;");
} catch (e) {
  constResult.innerHTML += `<p>Trying const reassigning</p>`;
  constResult.innerHTML += `<p style="color:red;">Error : ${e.message}</p>`;
}
