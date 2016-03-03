// print out "Fizz" if the integer is a multiple of 3
// print out "Buzz" if the integer is a multiple of 5
// print "FizzBuzz" if the integer is a multiple of 3 and 5

var fizzbuzz = function(){
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

fizzbuzz();
