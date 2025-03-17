// Handling var in the var-result section
var varResult = document.getElementById("var-result");

var varExample = "This is var declaration";
varResult.innerHTML += `<p>${varExample}</p>`;

var varExample = "This is var redeclaration"; // Redeclaration allowed with var
varResult.innerHTML += `<p>${varExample}</p>`;

varExample = "This is var reassigning"; // Reassignment allowed with var
varResult.innerHTML += `<p>${varExample}</p>`;

// Handling let in the let-result section
var letResult = document.getElementById("let-result");

// Declare a `let` variable
let letExample = "This is Let declaration";
letResult.innerHTML += `<p>${letExample}</p>`;

// Attempt to redeclare a `let` variable in the same scope
{
  let letExample = "This is Let redeclaration"; // Redeclaration not allowed in same scope
  letResult.innerHTML += `<p>Trying Let redeclaration : Uncaught SyntaxError: Identifier 'letExample' has already been declared</p>`;
}

// Reassign a `let` variable (this is valid)
letExample = "This is Let reassigning"; // Reassigning is allowed
letResult.innerHTML += `<p>${letExample}</p>`;


// Handling const in the const-result section
var constResult = document.getElementById("const-result");

// Declare a `const` variable
const constExample = "This is Const declaration";
constResult.innerHTML += `<p>${constExample}</p>`;

// Attempt to redeclare a `const` variable in the same scope
{
  const constExample = "This is Const redeclaration"; // Redeclaration not allowed in same scope
  constResult.innerHTML += `<p>Trying const redeclaration : Uncaught SyntaxError: Identifier 'constExample' has already been declared</p>`;

} 

// Attempt to reassign a `const` variable
try {
  constExample = "This is const reassigning"; // Reassigning not allowed with const
  constResult.innerHTML += `<p>${constExample}</p>`;
} catch (e) {
  constResult.innerHTML += `<p>error during const reassigning: ${e.message}</p>`;
}
