/**
 * @param {string} corridor
 * @return {number}
 */
var numberOfWays = function (corridor) {
    const mod = 1e9 + 7;
    let prev = -2;
    let ans = 1;

    for (let i in corridor) {
        if (corridor[i] === "S") {
            if (prev === -1) {
                prev = i;
            } else {
                if (prev !== -2) {
                    ans = (ans * (i - prev)) % mod;
                }

                prev = -1;
            }
        }
    }

    return prev > 0 ? ans : 0;
};
