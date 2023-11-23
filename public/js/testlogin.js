let loginButton = document.getElementById('login-button');
let errorMessageElement = document.getElementById('error-message');

loginButton.addEventListener('click', async (e) => {
    e.preventDefault();

    let loginAttemptEmail = document.getElementById('login-email').value;
    let loginAttemptPassword = document.getElementById('login-password-1').value;

    try {
        // Clear error messages if the user clicks the Login button
        errorMessageElement.innerText = '';

        const loginBtn = document.getElementById('loginBtn');
        loginBtn.addEventListener('click', clearErrorMessages);

        const signupBtn = document.getElementById('signupBtn');
        signupBtn.addEventListener('click', clearErrorMessages);

        function clearErrorMessages() {
            errorMessageElement.innerText = '';
        }

        // Fetch user data from the db.json file
        const response = await fetch('http://localhost:3000/users');
        const userData = await response.json();

        // create a constant with the name of the user, find the user's email, and check
        // if the email is equivalent to the typed email, same goes for the password
        const user = userData.find(user => user.user_email === loginAttemptEmail && user.user_password === loginAttemptPassword);

        // if the user exists, redirect them to the cart page
        if (user) {
            console.log('Logged in');

            // redirect to the cart page
            window.location.replace('/cart.html');
        } else {
            // otherwise login must be invalid, send an error message to the user
            console.log('Wrong login info');
            errorMessageElement.innerText = 'Wrong username and password';
        }
    } catch (error) {
        // error if everything above goes wrong
        errorMessageElement.innerText = 'An error occurred while processing your request';
        console.error('Error fetching user data:', error);
    }
});
