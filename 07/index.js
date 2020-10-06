function Modal() {
    this.show = function () {
        console.log(`show ${this.name}`)
    }
    this.hide = function () {
        console.log(`hide ${this.name}`)
    }
}

function Warning(name, message) {
    this.name = name,
        this.message = message;
}

Warning.prototype = new Modal();

const warning = new Warning('Map');
warning.show();


function Success(name, message) {
    this.name = name,
        this.message = message;
}

Success.prototype = new Modal();

const success = new Success('Map');
success.hide();








// Задача

class Anouncer {

    present() {
        console.log(`Hello, I am ${this.type} and I have size ${this.size}`);
    }
}

class Figure extends Anouncer {
    constructor(size) {
        super()
        this.size = size;
    }
}

class Circle extends Figure {

    constructor(type, size) {
        super(size);
        this.type = type;

    }
    getArea() {
        console.log(`Area ${this.type}`)
    }
}

class Square extends Figure {
    constructor(type, size) {
        super(size)
        this.type = type;

    }
    getArea() {
        console.log(`Area ${this.type}`)
    }
}

const c = new Circle('Figure', 25);
console.log(c);

const s = new Square('Figure', 12);
console.log(s);
c.present();
s.present();