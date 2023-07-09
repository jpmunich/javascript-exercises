const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
  return arr.reduce((sum, addend) => sum + addend, 0)
};

const multiply = function(...x) {
  let product = 1; 
  x.forEach(multiple => {product *= multiple});
  return product;
};

const power = function(x, power) {
	return Math.pow(x, power);
}

const factorial = function(x) {
  if (x === 0) return 1;
  let product = x;
  const i = 1;

	while (i < x) {
    x--;
    product *= x;
  }
  return product;
};

console.log(factorial(4))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
