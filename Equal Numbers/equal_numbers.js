const { gets, print } = require('./aux_function');

let A = parseInt(gets());
let B = parseInt(gets());

function compNumbers(A, B) {
    if (A === B) {
        return 'Equal';
    } else {
        return 'Not equal';
    }
}
print(compNumbers(A, B));



