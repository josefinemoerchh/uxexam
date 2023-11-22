// Get references to elements
const loginText = document.getElementById('login-text');
const signupText = document.getElementById('signup-text');
const loginBox = document.getElementById('login-box');
const signupBox = document.getElementById('signup-box');
const loginPassword = document.getElementById('login-password');
const signupPassword = document.getElementById('signup-password');
const signupRepeatPassword = document.getElementById('signup-repeat-password');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const signupForm = document.getElementById('form'); // Assuming your signup form has the ID 'form'

// Function to toggle to the signup form
function toggleToSignupForm() {
    // Set visibility for signup form elements
    signupText.classList.remove('invisible');
    signupBox.classList.remove('invisible');
    signupPassword.classList.remove('invisible');
    signupRepeatPassword.classList.remove('invisible');

    // Hide login form elements
    loginText.classList.add('invisible');
    loginBox.classList.add('invisible');
    loginPassword.classList.add('invisible');
}

// Function to toggle to the login form
function toggleToLoginForm() {
    // Set visibility for login form elements
    loginText.classList.remove('invisible');
    loginBox.classList.remove('invisible');
    loginPassword.classList.remove('invisible');

    // Hide signup form elements
    signupText.classList.add('invisible');
    signupBox.classList.add('invisible');
    signupPassword.classList.add('invisible');
    signupRepeatPassword.classList.add('invisible');
}

// Event listener for signup button
signupBtn.addEventListener('click', function () {
    toggleToSignupForm();
});

// Event listener for login button
loginBtn.addEventListener('click', function () {
    toggleToLoginForm();
});

// Event listener for form submission
signupForm.addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Check if the signup form elements are visible
    if (!signupBox.classList.contains('invisible')) {
        // Your signup logic here
        console.log('Submitting signup data');
        // You can add more code here to handle the form submission
    }
});