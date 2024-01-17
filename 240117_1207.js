let arr = [1, 2, 2, 1, 1, 3];

function getAns(arr) {
    let obj = {};

    arr.forEach((val) => {
        obj[val] = obj[val] + 1 || 1;
    });

    return Object.keys(obj).length === new Set(Object.values(obj)).size;
}

const ans = getAns(arr);
console.log(ans);
