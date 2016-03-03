
var fizzbuzz = function (nbr)  {
	  if ((nbr % 3 == 0) && (nbr % 5 == 0)) {
    alert("FizzBuzz");
    } else if (nbr % 3 == 0) {
  	alert("Fizz");
    } else if (nbr % 5 == 0) {
    alert("Buzz");
    } 
}

fizzbuzz(45);

module.exports = fizzbuzz;

