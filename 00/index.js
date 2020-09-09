const name = 'Nik';
const sureName = 'Nikolaev';
let age = 35;
alert(`“Hello, world! Встречай, JS! Я ${name} ${sureName}, и мне ${age}. Рад встрече!”;`);
let user ={
    name : 'Dima',
    height : 175,
    age : 40,
    smoke : 'no',
    frends : ['Oleg', 'Nina', 'Ivan', 'Olga']
};
console.log(user.height);
user.canSingSongs = 'yes';
user.frends = null;
console.log (user);