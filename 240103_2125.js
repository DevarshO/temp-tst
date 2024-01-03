/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    let sum = 0;
    let initalMachines = 0;

    for (let i = 0; i < bank.length; i++) {
        let countMachines = 0;
        for (let x of bank[i]) {
            countMachines += Number(x);
        }

        if (countMachines > 0) {
            sum += initalMachines * countMachines;
            initalMachines = countMachines;
        }
    }

    return sum;
};
