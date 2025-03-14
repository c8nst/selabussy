"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPrime = isPrime;
function isPrime(num) {
    if (num < 2)
        return false;
    for (var i = 2; i * i <= num; i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}
console.log(isPrime(12));
