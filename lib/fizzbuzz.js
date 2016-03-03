var fizzbuzz = function()  {
	var fizzbuzz = function(n) {
		// body...
		if(n%3===0 && n%5===0) {
			return "fizzbuzz";
		}
		else if(n%3===0) {
			return "fizz";
		}
		else if(n%5===0) {
			return "buzz";
		}
		else {
			return n.toString();
		}
	}
};

module.exports = fizzbuzz;