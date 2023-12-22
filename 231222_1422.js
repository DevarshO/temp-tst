const str = "1111";

var maxScore = function (s) {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "1") {
            count++;
        }
    }

    let max = count - 1;
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === "0") {
            count++;
        } else {
            count--;
        }
        max = Math.max(max, count);
    }

    return max;
};

const ans = maxScore(str);
console.log(ans);
