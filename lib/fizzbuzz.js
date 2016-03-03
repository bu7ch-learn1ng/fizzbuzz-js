var fizzbuzz = function (x)  {
	if (x%3==0) {
		return "Fizz";
	} else if (x%5==0) {
		return "Buzz";
	} else if (x%15==0) {
		return "FizzBuzz";
	} else {
		return "noFizz";
	}
};

module.exports = fizzbuzz;