var fizzbuzz = function (nb)  {
	if(nb%3 == 0 && nb%5 == 0){
		console.log('fizzbuzz');
	} else if (nb%3 == 0){
		console.log('fizz');
	} else if (nb%5 == 0){
		console.log('buzz');
	} else {
		console.log(i);
	}
};

module.exports = fizzbuzz;