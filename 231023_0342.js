function isPower(n) {
    if (n <= 0) {
        return false;
    }

    while ((n & 3) === 0) {
        n >>= 2;
    }

    if (n >> 1) {
        return false;
    }

    return true;
}

let val = 2;
let ans = isPower(val);
console.log(ans);
