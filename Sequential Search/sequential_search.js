const { gets, print } = require('./aux_function');

let elements = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75];

let value = parseInt(gets());

if (elements.includes(value)) {
    print(`The number ${value} was found in position ${elements.indexOf(value)}`);
} else {
    print(`Number ${value} not found!`);
}

