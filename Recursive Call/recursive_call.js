const { gets, print } = require('./aux_function');

let n = parseInt(gets());

function sum(number) {
    if (number < 1) {
        return 0;
    } else {
        return number + sum(number - 1);
    }
}

print(sum(n));