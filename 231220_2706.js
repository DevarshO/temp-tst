var buyChoco = function (prices, money) {
    let min1 = 101;
    let min2 = 101;

    for (let i = 0; i < prices.length; i++) {
        if (min1 > prices[i]) {
            min2 = min1;
            min1 = prices[i];
        } else if (min2 > prices[i]) {
            min2 = prices[i];
        }
    }

    return money >= min1 + min2 ? money - (min1 + min2) : money;
};

let arr = [1, 2, 2];
let arr1 = [3, 2, 3];

const ans = buyChoco(arr, 3);
console.log(ans);
