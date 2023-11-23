/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
    function matchResult(arr) {
        arr.sort((a, b) => a - b);
        const dif = arr[1] - arr[0];
        for (let i = 2; i < arr.length; i++) {
            if (arr[i] - arr[i - 1] !== dif) {
                return false;
            }
        }
        return true;
    }

    const ans = [];
    for (let i = 0; i < l.length; i++) {
        ans.push(matchResult(nums.slice(l[i], r[i] + 1)));
    }

    return ans;
};
