const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((result, e) => result + e, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, f) => product * f, 1);
};

const power = function(x, n) {
  return x ** n;
};

const factorial = function(n) {
  let f = 1
  if (n >= 0) {
    for (let i = 1; i <= n; i++) {
      f *= i
    };
    return f
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
