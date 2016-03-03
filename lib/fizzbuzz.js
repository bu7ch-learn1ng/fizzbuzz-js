var fizzbuzz = function (nbr)  {
// ici votre code =)
console.log('----'+nbr+'-------');
if (nbr % 3 == 0 && nbr % 5 == 0) 
	return('fizzbuzz');	
else if (nbr % 3 == 0)
		return('fizz');
else if (nbr % 5 == 0) 
	return('buzz');

return(nbr);
};


var module.exports = fizzbuzz;