/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
    let ans = [];

    while (nums.length > 0) {
        let temp = [];

        for (let i = 0; i < nums.length; ) {
            if (!temp.includes(nums[i])) {
                temp.push(nums[i]);
                nums.splice(i, 1);
            } else {
                i++;
            }
        }

        ans.push(temp);
    }

    return ans;
};
