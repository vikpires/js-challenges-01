const { gets, print } = require('./aux_function');

var A = parseInt(gets());
var N = parseInt(gets());

let sum = 0;

for (let i = A; i <= N; i++) {
    if (i % A === 0) {
        sum += i;
    }
}

print(sum);
