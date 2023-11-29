// this is empty or not working
const nums = [2, 1, 23, 45, 9, 10];

function getAns(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] -= rev(nums[i]);
    }
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + rev(nums[j]) === nums[j] + rev(nums[i])) {
                ans++;
            }
        }
    }
    return ans;
}

function rev(n) {
    let val = 0;
    while (n > 0) {
        val = val * 10 + (n % 10);
        n = Math.floor(n / 10);
    }
    return val;
}

console.log(getAns(nums));
