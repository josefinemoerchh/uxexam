const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

// Validation function
function isFormValid() {
    let messages = [];

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        messages.push('Please enter a valid email address');
    }

    if (password.value.length <= 8) {
        messages.push('Your password must have a minimum of 8 characters');
    }

    if (password.value.length >= 20) {
        messages.push('Your password can have a maximum of 20 characters');
    }

    if (password.value.search(/[a-z]/i) < 0) {
        messages.push("Your password must contain at least one letter.");
    }

    if (password.value.search(/[0-9]/) < 0) {
        messages.push("Your password must contain at least one digit.");
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password.value)) {
        messages.push("Your password must contain at least one special character.");
    }

    if (messages.length > 0) {
        errorElement.innerText = messages[0]; // Display only the first error message
        return false;
    }

    // Clear any previous error messages
    errorElement.innerText = '';

    // Form is valid, submit the data
    submitFormData();

    // Form is valid
    return true;
}

function submitFormData() {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    console.log(data);

    // fetch data
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_email: email.value,
            user_password: password.value,
        }),
    })
    .then(response => response.json()) // Assuming the server returns JSON
    .then(data => {
        console.log('Success:', data);
        
        // pop-up to inform user that they successfully signed up, + redirect
        window.alert('Signup successful!');
        console.log("successful login");
        window.location.href = '/pages/index.html';
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
// Event listener for form submission
form.addEventListener('submit', (e) => {
    if (!isFormValid()) {
        e.preventDefault();
    }
});