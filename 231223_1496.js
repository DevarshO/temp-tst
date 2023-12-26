/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
    const pt = { x: 0, y: 0 };

    const visited = [[0, 0]];

    for (let d of path) {
        if (d === "N") {
            pt.y++;
        } else if (d === "S") {
            pt.y--;
        } else if (d === "E") {
            pt.x++;
        } else {
            pt.x--;
        }

        if (visited.find((val) => val[0] === pt.x && val[1] === pt.y)) {
            return true;
        }
        visited.push(Object.values(pt));
    }

    return false;
};

const path = "NESN";
const ans = isPathCrossing(path);
console.log(ans);
