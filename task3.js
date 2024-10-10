function getGCD(a, b) {
    while (b) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function getCommonDivisors(arr) {
    let gcd = arr[1];
    for (let i = 1; i < arr.length; i++) {
        gcd = getGCD(gcd, arr[i]);
    }

    const divisors = [];
    for (let i = 2; i <= gcd; i++) {
        if (gcd % i === 0) divisors.push(i);
    }

    return divisors;
}

console.log(getCommonDivisors([42, 12, 18])); 