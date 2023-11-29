/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function (nums) {
    const n = nums.length;
    const output = [];

    let rSum = 0;
    for (const x of nums) {
        rSum += x;
    }

    let lSum = 0;
    for (let i = 0; i < n; i++) {
        output.push(rSum + nums[i] * (2 * i - n) - 2 * lSum);
        lSum += nums[i];
    }

    return output;
};
