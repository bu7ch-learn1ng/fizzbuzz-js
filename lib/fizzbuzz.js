var fizzbuzz = function (n)  {
	// ici votre code =)
	var res = "";
	if(!isNaN(n)) {
		if(n%3==0)
		{
			res += "fizz";
		}
		if(n%5==0) {
			res += "buzz";
		}
		console.log(res);

	}
};

module.exports = fizzbuzz;