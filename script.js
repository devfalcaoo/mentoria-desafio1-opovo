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

    if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid) {
        alert("Form submitted successfully!");
        form.reset(); //Limpa o fomulário após o envio
        clearFormStates(); // Limpa os estados do formulário
    }
});

///////////////////////VALIDAÇÃO DOS CAMPOS///////////////////////

function checkInputFirstName() {
    const firstNameValue = firstName.value.trim();

    if (firstNameValue === '') {
        errorInput(firstName, "First name is required");
        return false;
    } else {
        setSuccess(firstName);
        return true;
    }
}

function checkInputLastName() {
    const lastNameValue = lastName.value.trim();

    if (lastNameValue === '') {
        errorInput(lastName, "Last name is required");
        return false;
    } else {
        setSuccess(lastName);
        return true;
    }
}

function checkInputEmail() {
    const emailValue = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === '') {
        errorInput(email, "Email is required");
        return false;
    } else if (!emailRegex.test(emailValue)) {
        errorInput(email, "Email is not valid");
        return false;
    } else {
        setSuccess(email);
        return true;
    }
}

function checkInputPassword() {
    const passwordValue = password.value.trim();

    if (passwordValue === '') {
        errorInput(password, "Password is required");
        return false;
    } else if (passwordValue.length < 8) {
        errorInput(password, "Password must be at least 8 characters long");
        return false;
    } else {
        setSuccess(password);
        return true;
    }
}

////////////////////////FUNÇÕES DE VALIDAÇÃO////////////////////////

    function isFormValid() {
        const formItems = document.querySelectorAll('.form-item');
        return [...formItems].every(item => item.classList.contains('error'));
    }
    
    function errorInput(input, message) {
        const formItem = input.parentElement;
        const textMessage = formItem.querySelector('small');
        const icon = formItem.querySelector('img');
    
        textMessage.innerText = message;
        formItem.classList.remove = ('form-content');
        formItem.classList.add('error');
        if (icon) icon.style.visibility = 'visible'; // Exibe o ícone de erro
    }
    
    function setSuccess(input) {
        const formItem = input.parentElement;
        const textMessage = formItem.querySelector('small'); // Limpa a mensagem de erro
        const icon = formItem.querySelector('img');

        textMessage.innerText = ''; // Limpa a mensagem de erro
        formItem.classList.remove = ('error');
        formItem.classList.add('form-content');
        if (icon) icon.style.visibility = 'hidden'; // Esconde o ícone de erro
    }