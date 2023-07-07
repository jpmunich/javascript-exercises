const convertToCelsius = function(temp) {
    const celsius = ((temp - 32) * (5/9));
    if (!Number.isInteger(celsius)) return parseFloat(celsius.toFixed(1));
    else return celsius;
};

const convertToFahrenheit = function(temp) {
  const fahrenheit = (temp * (9/5)) + 32;
  if (!Number.isInteger(fahrenheit)) return parseFloat(fahrenheit.toFixed(1));
  else return fahrenheit;
};

console.log(convertToCelsius(37));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
