
var fizzbuzz = function (n)  {
var n = (prompt("Entrez un chiffre")); //le mettre dans la fonction
if 
	((n%3==0) && (n%5==0)){
	console.log ("FizzBuzz")
}
 else if (n%5==0) {
 	console.log("Buzz")
 }
else if (n%3==0) {
	console.log("Fizz")
}
else{
	console.log(n)
}
}
fizzbuzz(); 
// apelle de ma fonction 
// module.exports = fizzbuzz;