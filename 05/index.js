

const email = document.getElementById('login');
const password = document.getElementById('pw');
const btn = document.getElementById('btn');

email.style.color = 'blue';
password.style.color = 'orange';
btn.style.backgroundColor='black';
btn.style.color = 'white';

const user = {
    name: 'dima',
    email: '777',
    password: '77'
}

email.addEventListener('input', function (event) {
    const isValid = event.target.value === user.email;

    if (!isValid) {
        event.target.classList.add('invalid');
    } else {
        event.target.classList.remove('invalid');
    }
})

password.addEventListener('input', function (event) {
    const isValid = event.target.value === user.password;

    if (!isValid) {
        event.target.classList.add('invalid');
    } else {
        event.target.classList.remove('invalid');
    }
})

btn.addEventListener('click', function (event) {
    event.preventDefault();
    if (email.value === "") {
        alert('Введите email')
    } else if (password.value === "") {
        alert('Введите password')
    } else if (user.email === email.value && user.password === password.value) {

        alert(`Hello, ${user.name}`)
    } else {
        alert('Вы ввели не верный email или password. Попробуйте снова.')
        email.value = '';
        password.value = '';
    }

})



