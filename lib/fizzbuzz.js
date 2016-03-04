var fizzbuzz = function(){
 var fizzbuzz = function(compteur){
  compteur = new Object();
  if(compteur % 15 == 0){
   return "FizzBuzz";
  }else if (compteur % 5 == 0) {
   return "Buzz" ;
  }else if (compteur % 3 == 0) {
    return "Fizz";
  }else {
   return compteur.toString();
  }
 }
 fizzbuzz(23);
};

fizzbuzz();
// module.exports = fizzbuzz;
