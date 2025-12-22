const container = document.querySelector('.container');
const signupLink = document.querySelector('.signup-link');
const loginLink = document.querySelector('.login-link');

signupLink.onclick = () => {
    container.classList.add('active');
};

loginLink.onclick = () => {
    container.classList.remove('active');
};
