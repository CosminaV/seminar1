function checkDivisible (n, divisor) {
    if (n % divisor != 0) {
        return false
    } else {
        return true
    }
}

console.log(checkDivisible(10, 2))
console.log(checkDivisible(10, 3))

