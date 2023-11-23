/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */

var fullBloomFlowers = function (flowers, people) {
    const [startTime, endTime] = flowers.reduce(
        (timeZone, ele) => {
            timeZone[0].push(ele[0]);
            timeZone[1].push(ele[1]);
            return timeZone;
        },
        [[], []]
    );

    startTime.sort((a, b) => a - b);
    endTime.sort((a, b) => a - b);

    let ans = [];

    people.forEach((pTime, ind) => {
        ans.push(startOcc(startTime, pTime) - endOcc(endTime, pTime));
    });

    return ans;
};

function startOcc(arr, num) {
    let s = 0;
    let e = arr.length - 1;
    let ans = 0;

    while (s <= e) {
        const mid = Math.floor((s + e) / 2);

        if (arr[mid] > num) {
            e = mid - 1;
        } else {
            ans = mid + 1;
            s = mid + 1;
        }
    }

    return ans;
}
function endOcc(arr, num) {
    let s = 0;
    let e = arr.length - 1;
    let ans = 0;

    while (s <= e) {
        const mid = Math.floor((s + e) / 2);

        if (arr[mid] < num) {
            ans = mid + 1;
            s = mid + 1;
        } else {
            e = mid - 1;
        }
    }

    return ans;
}
