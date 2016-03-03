var fizzbuzz = function (x)  {
	if (x%3==0) {
		print("Fizz");
	} else if (x%5==0) {
		print("Buzz");
	} else if (x%15==0) {
		print("FizzBuzz")
	} else {
		print("noFizz")
	}
};

module.exports = fizzbuzz;