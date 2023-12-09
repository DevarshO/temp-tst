let str = "2192426";

function getAns(num) {
    return num.lastIndexOf(num.match(new RegExp(/(1|3|5|7|9)/, "g"))?.pop());
}
const ans = getAns(str);
console.log(ans);

console.log(str.slice(0, 1));
