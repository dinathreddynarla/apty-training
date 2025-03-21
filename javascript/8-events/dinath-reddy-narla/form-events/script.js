const usernameField = document.getElementById('username')
const emailField = document.getElementById('email')
const passwordField = document.getElementById('password')

const usernameError = document.getElementById('username-error')
const emailError = document.getElementById('email-error')
const passwordError = document.getElementById('password-error')

// Validation Functions
function validateUsername() {
    const username = usernameField.value.trim();
    if (username.length < 5) {
        console.log(username);
        
      usernameError.textContent = 'Username must be at least 5 characters long.';
      usernameField.classList.add('invalid');
      usernameField.classList.remove('valid');
    } else {
      usernameError.textContent = '';
      usernameField.classList.add('valid');
      usernameField.classList.remove('invalid');
    }
  }
  
  function validateEmail() {
    const email = emailField.value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      emailError.textContent = 'Please enter a valid email address.';
      emailField.classList.add('invalid');
      emailField.classList.remove('valid');
    } else {
      emailError.textContent = '';
      emailField.classList.add('valid');
      emailField.classList.remove('invalid');
    }
  }
  
  function validatePassword() {
    const password = passwordField.value.trim();
    if (password.length < 6) {
      passwordError.textContent = 'Password must be at least 6 characters long.';
      passwordField.classList.add('invalid');
      passwordField.classList.remove('valid');
    } else {
      passwordError.textContent = '';
      passwordField.classList.add('valid');
      passwordField.classList.remove('invalid');
    }
  }
  
  // Event Listeners
  usernameField.addEventListener('input', validateUsername);
  emailField.addEventListener('input', validateEmail);
  passwordField.addEventListener('input', validatePassword);
  
  // Form Submission Validation
  document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    validateUsername();
    validateEmail();
    validatePassword();
  
    // If all fields are valid, submit the form
    if (
      usernameError.textContent === '' &&
      emailError.textContent === '' &&
      passwordError.textContent === ''
    ) {
      alert('Form submitted successfully!');
      e.target.submit()
    } else {
      alert('Please fix the errors before submitting.');
    }
  });
  