// script.js

document.addEventListener('DOMContentLoaded', function() {
    const signupContainer = document.getElementById('signup');
    const signinContainer = document.getElementById('signIn');
    const signInButton = document.getElementById('SignInButton');
    const signUpButton = document.getElementById('SignUpButton');

    // Function to show Sign Up page and hide Sign In page
    function showSignUp() {
        signupContainer.style.display = 'block';
        signinContainer.style.display = 'none';
    }

    // Function to show Sign In page and hide Sign Up page
    function showSignIn() {
        signupContainer.style.display = 'none';
        signinContainer.style.display = 'block';
    }

    // Add event listeners to buttons
    signInButton.addEventListener('click', showSignIn);
    signUpButton.addEventListener('click', showSignUp);

    // Initially show the Sign In page
    showSignIn();
});
