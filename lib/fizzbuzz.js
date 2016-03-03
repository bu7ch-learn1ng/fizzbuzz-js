var fizzbuzz = function (nb)  {
  var result = '';
  
  if (nb === 1) result += '1';
  if (nb % 3) result += 'Fizz';
  if (nb % 5) result += 'Buzz';

  return result;
};

module.exports = fizzbuzz;
