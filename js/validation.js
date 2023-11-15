const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = [];

    if (name.value === '' || name.value === null) {
        messages.push('Your name is required');
    }

    if (password.value.length <= 6) {
        messages.push('Your password must have min 6 characters');
    }

    if (password.value.length >= 20) {
        messages.push('Your password can have max 20 characters');
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
        e.preventDefault();
        errorElement.innerText = messages[0]; // Display only the first error message
    }
});