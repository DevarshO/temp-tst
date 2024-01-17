/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let str = nums.join() + ",";
    let ans = 0;

    while (str) {
        str = str.replaceAll(str.slice(0, str.indexOf(",") + 1), "-");

        const len1 = str.length;
        str = str.replaceAll("-", "");
        const count = len1 - str.length + 2;

        if (count < 4) {
            return -1;
        }
        ans += Math.floor(count / 3);
    }
    return ans;
};

const arr = [
    14, 12, 14, 14, 12, 14, 14, 12, 12, 12, 12, 14, 14, 12, 14, 14, 14, 12, 12,
];
const ans = minOperations(arr);
console.log(ans);
