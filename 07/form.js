const user = {
    email: 'p@.ru',
    password: '55',
    name: 'Dimas'
};


const singUp = getElementById('tab1');
const logIn = getElementById('tab2');

singUp.addEventListener('click', function(){

    
})




const INVALID_CLASS = 'invalid';

const page = document.getElementById('page');
const email = document.getElementById('emailInput');
const password = document.getElementById('passwordInput');
const btn = document.getElementById('btn');
const form = document.getElementById('loginForm');

const formRegister = document.getElementById('registerForm')




let message = null;

setDisabledButtonState();

email.addEventListener('input', eventHandler);
password.addEventListener('input', eventHandler);
btn.addEventListener('click', onClick);

function eventHandler(event) {
    const hasInvalidClass = event.target.classList.contains(INVALID_CLASS);
    const isValid = event.target.value !== "";

    if (!hasInvalidClass && !isValid) {
        event.target.classList.add(INVALID_CLASS);
    }

    if (hasInvalidClass && isValid) {
        event.target.classList.remove(INVALID_CLASS);
    }

    if (message) {
        page.classList.remove(INVALID_CLASS);
        message.remove();
       // message = null
    }

    setDisabledButtonState();

}

function onClick(event) {
    event.preventDefault();
    message = document.createElement('div');
    message.classList.add('message');

    if (email.value === user.email && password.value === user.password) {
        console.log (`Hello, ${user.name}`);
        formRegister.style.display = 'none';
    } else {
        message.innerText = 'Вы ввели неверный пароль. Попробуйте снова.';
        page.classList.add(INVALID_CLASS);
        form.reset();
        setDisabledButtonState();
    }
    page.append(message);
}

function setDisabledButtonState () {
    btn.disabled = !email.value || !password.value;
}