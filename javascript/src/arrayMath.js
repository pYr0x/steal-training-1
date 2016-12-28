var arrayAddition = function(arr) {
  return arr.reduce(function (a, b) {
    return a + b;
  }, 0);
};

var arraySubtraction = function(arr) {
  return arr.reduce(function (a, b) {
    return a - b;
  }, 0);
};