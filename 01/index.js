// Задача 1
function fizzSuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else if (i % 3 === 0) {
            console.log('Fizz')
        } else {
            console.log(i)
        }
    }
}
fizzSuzz(19);

// Задача 2
function toNumber(value) {
    if (value === ('')) {
        console.log(+value)
    } else if (value != ('')) {
        console.log(+value)
    } else {
        console.log(null)
    }
}
toNumber('125z');





//Задача 4
function isPalindrom(word) {
    const wordRevers = word.length;
    for (var i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[wordRevers - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrom('anna'));