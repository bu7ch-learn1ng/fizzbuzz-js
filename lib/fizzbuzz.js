var fizzbuzz = function ()  {
// ici votre code =)

  var b = prompt('chiffre');
  if(b % 3 == 0 && b % 5 != 0){
    alert('Fizz');
  }
  else if (b % 5 == 0 && b % 3 != 0){
    alert('Buzz');
  }
  else if ( b % 3 == 0 && b % 5 == 0){
    alert("FizzBuzz");
  }
}



module.exports = fizzbuzz;
