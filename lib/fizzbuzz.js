var fizzbuzz = function (nb)  {
	if(nb%3 == 0 && nb%5 == 0){
		return 'fizzbuzz';
	} else if (nb%3 == 0){
		return 'fizz';
	} else if (nb%5 == 0){
		return 'buzz';
	} else {
		return nb;
	}
};

module.exports = fizzbuzz;