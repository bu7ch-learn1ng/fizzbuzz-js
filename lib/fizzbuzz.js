var fizzbuzz = function (nombre)  {
  if (nombre % 3 == 0) && (nombre % 5 != 0)){
    return "fizz";
  }
  else if (nombre % 5 == 0) && (nombre % 3 != 0)){
    return "buzz";
  }
  else if (nombre % 3 == 0) && (nombre % 5 == 0){
    return "fizzbuzz";
  }
  else {
    return nombre.toString();
  }
}
fizzbuzz();

module.exports = fizzbuzz;
