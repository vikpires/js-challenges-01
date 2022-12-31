const { gets, print } = require('./aux_function');

let result = gets();

function fizzBuzz(i) {
    if (i % 15 === 0) {
        return 'FizzBuzz';
    } else if (i % 3 === 0) {
        return 'Fizz';
    } else if (i % 5 === 0) {
        return 'Buzz';
    } else if (i % 15 != 0) {
        return result;
    }
}

print(fizzBuzz(result));



