/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
};

const cookies = [1, 2, 3];
// [1,4,2]
const child = [1, 1];
// [1,3,2]

const ans = findContentChildren(child, cookies);
console.log(ans);
