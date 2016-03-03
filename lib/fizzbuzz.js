var fizzbuzz = function () {
  var fizzbuzz = function (nb)  {
    var result = '';
  
    if (nb === 1) result += '1';
    if (nb % 3 === 0) result += 'fizz';
    if (nb % 5 === 0) result += 'buzz';

    return result;
  };
  return {fizzbuzz: fizzbuzz}
};

module.exports = fizzbuzz;
