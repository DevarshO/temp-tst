const ar = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
];
const ar1 = [
    [100, 200, 100],
    [200, 50, 200],
    [100, 200, 200],
];

function ans(arr) {
    const array = [];
    const x = arr.length;
    const y = arr[0].length;

    for (let i = 0; i < x; i++) {
        const row = [];

        for (let j = 0; j < y; j++) {
            let sum = 0;
            let count = 0;

            for (m = i - 1; m < i + 2; m++) {
                for (n = j - 1; n < j + 2; n++) {
                    if (arr[m] && arr[m][n] > -1) {
                        sum += arr[m][n];
                        count++;
                    }
                }
            }
            row.push(~~(sum / count));
        }
        array.push(row);
    }

    return array;
}

// const answ = ans(ar);
const answ = ans(ar1);

console.log(answ);
