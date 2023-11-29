const num = 128;

function getAns(n) {
    /*
    // Method 1
    console.log(n.toString(2).replaceAll("0", "").replace("0", ""));
    */

    /*
    // Method 2
    let count = 0;

    while (n !== 0) {
        count += n & 1;
        n = n >>> 1;
    }

    return count;
    */

    // Method 3
    let count = 0;
    while (n !== 0) {
        n = n & (n - 1);
        count++;
    }
    return count;
}

const ans = getAns(num);
console.log(ans);
