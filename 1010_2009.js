/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    nums.sort((a, b) => a - b);

    let maxOperations = 1;
    const n = nums.length;

    let start = 0;
    let currentOperations = 0;

    for (let i = 0; i < n; i++) {
        while (nums[i] >= nums[start] + n) {
            if (nums[start] !== nums[start - 1]) {
                currentOperations--;
            }
            start++;
        }

        if (i === 0 || nums[i] !== nums[i - 1]) {
            currentOperations++;
        }

        maxOperations = Math.max(maxOperations, currentOperations);
    }

    return n - maxOperations;
};

let arr = [
    44, 28, 33, 49, 4, 2, 35, 28, 25, 38, 47, 20, 14, 30, 27, 38, 42, 14, 34,
];
console.log(minOperations(arr));
