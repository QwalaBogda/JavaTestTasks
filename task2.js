function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function getPrimesInRange(min, max) {
    const primes = [];
    for (let i = min; i <= max; i++) {
        if (isPrime(i)) primes.push(i);
    }
    return primes;
}

console.log(getPrimesInRange(11, 20)); 