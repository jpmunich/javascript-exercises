const fibonacci = function(x) {
    if (x < 0) return "OOPS";
    previous = 0;
    total = 1;

    for (let i = 1; i < parseInt(x); i++) {
        total += previous;
        previous = total - previous
    }
    return total;

};

console.log(fibonacci(0));
// Do not edit below this line
module.exports = fibonacci;
