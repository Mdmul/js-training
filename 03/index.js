//  Задача 1 Создать объект car с набором свойств по желанию. Вывести в цикле все ключи и значения объекта.

let car = {
    color: 'green',
    maxspeed: 250,
    doors: 4,
    audio: {
        model: "Sony",
        speakers: 6
    }
}
for (let key in car) {
    console.log(key);
    console.log(car[key]);
}

// Задача 2 Создать объект user с свойствами name, email, phone, id. Скопировать этот объект со всеми свойствами в новую переменную newUser.

let user = {
    name: 'Dima',
    email: 'koleso@mail.ru',
    phone: 555777,
    id: 1983
}
let newUser = {};
for (let key in user) {
    newUser[key] = user[key];
}
console.log(newUser);

const newUser2 = Object.assign({}, user);
console.log(newUser2)


// Задача 3 Создать объект circle со свойствами: radius, color. Также создать в объекте метод   calculateCircumference(), при вызове которого, в консоль выводится длина окружности (2 * число пи * радиус).

let circle = {
    radius: 5,
    color: 'red',
    calculateCircumference: function (radius) {
        const pi = 3.14;
        let result = 2 * pi * radius;
        return result;
        console.log(result);
    }
}
console.log(circle.calculateCircumference(8))



// 4 Задача Создать объект message с полем text и методами: getMessage(string), showMessage(). При вызове метода getMessage в поле text записывается переданная в качестве аргумента строка. При вызове метода showMessage() вызывается alert() с содержимым поля text 

let message = {
    // text = 'text'
}
message.getMessage = function (string) {
    //alert('Hello')
}
message.getMessage();



// Задача 5 Создать объект Прямоугольник (rectangle) с параметрами высота (height) и ширина (width) и методом getArea(), который возвращает площадь
let rectangle = {
    height: 5,
    width: 6,
    getArea: function (height, width) {
        let result = height * width;
        return result;
        console.log(reult)
    }
}
console.log(rectangle.getArea(8, 6));



// Задача 6 Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false. 
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}


// Задача 8 Создать функцию-конструктор Dog(name, breed, age), которая будет принимать в качестве аргументов имя (string), породу(string), возраст(number), и потом при последующем вызове (инстанцировании) создавать объект со следующими свойствами:name,age,breed,и методами:intro() - выводит в консоль строку следующего вида: Woof! I am NAME, and I am AGE. I am BREED.bark() - выводит в console.log() столько раз слово “woof!”, (через пробел) сколько собаке лет. Например, собаке 5 лет. После вызова метода bark() в консоль должна быть выведена следующая строка:  “woof! woof! woof! woof! woof!”comeHere(word) - принимает на вход строку word. Если word совпадает с именем собаки, то в консоль должно быть выведено “arf-arf”. Если не совпадает, то ничего выводить не надо

function Dog(name, bread, age) {
    this.name = name;
    this.bread = bread;
    this.age = age;
    this.intro = function () {
        console.log(`Woof! I am ${this.name}, and I am ${this.age}. I am ${this.bread}`)
    }
    this.bark = function () {
        
        for (let i = 0; i < age; i++) {
            console.log('woof!')
        }
    }
    this.comeHere=function (word){
        if (name==='word'){
            console.log('arf-arf')
        }
    }
}
const reks = new Dog('reks', 'taksa', 8)
console.log(reks);
reks.intro();
reks.bark();
reks.comeHere();