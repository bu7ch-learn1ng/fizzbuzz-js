var fizzbuzz = function (number)  {
var number = prompt("Balance un chiffre!");
if (number % 3 == 0 && number % 5 == 0) {
  alert("FizzBuzz")
}
else if (number % 3 == 0) {
  alert("Fizz")
}
else if (number % 5 == 0) {
  alert("Buzz")
}
else {
  alert("Nul ton chiffre!")
}
};

fizzbuzz();
