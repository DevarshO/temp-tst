/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
    const n = Math.floor(piles.length / 3);
    piles.sort((a, b) => b - a);

    let sum = 0;
    for (let i = 1; i < piles.length - n; i += 2) {
        sum += piles[i];
    }
    return sum;
};
