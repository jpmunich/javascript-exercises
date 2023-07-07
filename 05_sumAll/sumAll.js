const sumAll = function(min, max) {
    if (min < 0 || max < 0) return "ERROR";
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";

    let total = 0;
    const range = Math.abs(max - min);

    for (let i = 0; i <= range; i++) {
        total += min;
        if (min > max) min--;
        else min++;
    }
    return total;
};

console.log(sumAll(123, 1));
// Do not edit below this line
module.exports = sumAll;
