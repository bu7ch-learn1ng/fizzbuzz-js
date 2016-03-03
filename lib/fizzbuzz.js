var fizzbuzz = function(value) {
  if (value % 3 === 0 && value % 5 === 0) {
    return "fizzbuzz";
  } else if (value % 3 === 0) {
    return "fizz";
  } else if (value % 5 === 0) {
    return "buzz";
  } else {
    return value;
  }
};

module.exports = fizzbuzz;