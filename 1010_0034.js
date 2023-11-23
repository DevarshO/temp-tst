/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    return [firstOcc(nums, target), lastOcc(nums, target)];
};

function firstOcc(nums, target) {
    let firstPos = -1;

    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] > target) {
            end = mid - 1;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            firstPos = mid;
            end = mid - 1;
        }
    }

    return firstPos;
}
function lastOcc(nums, target) {
    let lastPos = -1;

    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] > target) {
            end = mid - 1;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            lastPos = mid;
            start = mid + 1;
        }
    }

    return lastPos;
}

let nums = [5, 7, 7, 8, 8, 10];
let target = 8;
console.log(searchRange(nums, target));
