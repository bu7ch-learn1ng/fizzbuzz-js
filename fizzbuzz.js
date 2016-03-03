var fizzbuzz = function ()  {
// ici votre code =)

  var i = prompt('Ecris un chiffre');
  if(i % 3 == 0 && i % 5 != 0){
    alert('Fizz');
  }
  else if (i % 5 == 0 && i % 3 != 0){
    alert('Buzz');
  }
  else if ( i % 3 == 0 && i % 5 == 0){
    alert("FizzBuzz");
  }
}



module.exports = fizzbuzz;
