var fizzbuzz = function (nombre)  {
  if (nombre % 3 == 0 && nombre%5 != 0){
    return "Fizz";
  }
  else if (nombre % 5 == 0 && nombre % 3 != 0){
    return "Buzz";
  }
  else if (nombre % 3 == 0 && nombre % 5 == 0){
    return "FizzBuzz";
  }
  else {
    return(nombre);
  }
}

module.exports = fizzbuzz;
