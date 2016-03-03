var fizzbuzz = function (nombre)  {
  if (nombre % 3 == 0 && nombre%5 != 0){
    alert("Fizz");
  }
  else if (nombre % 5 == 0 && nombre % 3 != 0){
    alert("Buzz");
  }
  else if (nombre % 3 == 0 && nombre % 5 == 0){
    alert("Fizzbuzz");
  }
}

module.exports = fizzbuzz;
