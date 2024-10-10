function declineComputer(count) {
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return count + " компьютеров";
    } else if (lastDigit === 1) {
        return count + " компьютер";
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        return count + " компьютера";
    } else {
        return count + " компьютеров";
    }
}

console.log(declineComputer(25)); // "25 компьютеров"
console.log(declineComputer(41)); // "41 компьютер"
console.log(declineComputer(1048)); // "1048 компьютеров"