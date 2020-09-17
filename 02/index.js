// Задача 0
function sayHello(name) {
    if (name === 'Mark') {
        console.log(`Hi, ${name}!`)
    } else {
        console.log(`Hello, ${name}!`)
    }
}
sayHello('Mark');

// Задача 1
function min(a, b) {
    if (a < b) {
        console.log(a)
    } else {
        console.log(b)
    }
}
min(-7, -6);

// Задача 2
function pow(x, n) {
    if (n != 1) {
        return x ** n
    } else {
        console.log('не натуральное число')
    }

}
console.log(pow(2, 5));

// Задача 3
function isEven(n) {
    if (!(n % 2))
        return true;
    else
        return false;
}
console.log(isEven(4));



// Задача 5
function convertFloor(floor) {
    let newFloor = floor + 1;
    if (floor >= 0 && floor <= 12) {
        console.log(newFloor)
    } else if (floor < 0) {
        console.log(floor)
    } else if (floor === 13) {
        console.log('Такой этаж отсутствует')
    } else console.log(floor)
}
convertFloor(14)

// Задача 6-1

function convertType1(value, toType) {
    switch (toType) {
        case ('boolean'):
            return Boolean(value);
            break;
        case ('string'):
            return String(value);
            break;
        case ('number'):
            return Number(value);
            break;
    }
}
console.log(convertType1('my string', 'boolean'));

// Задача 6-2
let convertType2 = function (value, toType) {
    if (toType === 'boolean') {
        return Boolean(value);
    } else if (toType === 'string') {
        return String(value);
    } else if (toType === 'number') {
        return Number(value);
    }
}
console.log(convertType2('my string', 'boolean'));

// Задача 6-3
// let convertType3 = (value, toType) => {
//     (toType === 'boolean') ? Boolean(value) :
//         (toType === 'string') ? String(value) :
//             (toType === 'number') ? Number(value) ;
// }


// console.log(convertType3('my string', 'boolean'));