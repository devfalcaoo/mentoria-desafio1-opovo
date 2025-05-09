const form = document.getElementById('form');
const firstName = document.getElementById('First-name');
const lastName = document.getElementById('Last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    checkInputFirstName();
    checkInputLastName();
    checkInputEmail();
    checkInputPassword();

    if (isFormValid()) {
        alert("Form submitted successfully!");
    }
});

function checkInputFirstName() {
    const firstNameValue = firstName.value.trim();

    if (firstNameValue === '') {
        errorInput(firstName, "First name is required");
    } else {
        setSuccess(firstName);
    }
}

function checkInputLastName() {
    const lastNameValue = lastName.value.trim();

    if (lastNameValue === '') {
        errorInput(lastName, "Last name is required");
    } else {
        setSuccess(lastName);
    }
}

function checkInputEmail() {
    const emailValue = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === '') {
        errorInput(email, "Email is required");
    } else if (!emailRegex.test(emailValue)) {
        errorInput(email, "Email is not valid");
    } else {
        setSuccess(email);
    }
}

function checkInputPassword() {
    const passwordValue = password.value.trim();

    if (passwordValue === '') {
        errorInput(password, "Password is required");
    } else if (passwordValue.length < 8) {
        errorInput(password, "Password must be at least 8 characters long");
    } else {
        setSuccess(password);
    }
}

    function isFormValid() {
        const formItems = document.querySelectorAll('.form-item');
        return [...formItems].every(item => item.classList.contains('error'));
    }
    
    function errorInput(input, message) {
        const formItem = input.parentElement;
        const textMessage = formItem.querySelector('small');
    
        textMessage.innerText = message;
        formItem.classList.remove = ('form-content');
        formItem.classList.add('error');
    }
    
    function setSuccess(input) {
        const formItem = input.parentElement;
        formItem.classList.remove = ('error');
        formItem.classList.add('form-content');
    }