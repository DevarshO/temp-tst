const points = [
    [1, 1],
    [3, 4],
    [-1, 0],
];

function getAns(points) {
    let time = 0;

    for (let i = 1; i < points.length; i++) {
        time += Math.max(
            Math.abs(points[i - 1][0] - points[i][0]),
            Math.abs(points[i - 1][1] - points[i][1])
        );
    }

    return time;
}

const ans = getAns(points);
console.log(ans);
