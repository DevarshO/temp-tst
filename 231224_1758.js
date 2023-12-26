/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
    let s0 = 0;
    let s1 = 0;

    for (let i = 0; i < s.length; i++) {
        if (i % 2 ^ s[i]) {
            s0++;
        } else {
            s1++;
        }
    }

    return Math.min(s0, s1);
};

const s = "11111100";
const ans = minOperations(s);
console.log(ans);
