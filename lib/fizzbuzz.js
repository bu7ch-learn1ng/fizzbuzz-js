var fizzbuzz = function ()  {
 function fizzbuzz (compteur){
 if(compteur % 15 == 0){
  return("FizzBuzz");
 }else if (compteur % 5 == 0) {
  return("Buzz");
 }else if (compteur % 3 == 0) {
   return("Fizz");
  }else {
  return compteur.toString();
  }
 }
 fizzbuzz(15);
};
fizzbuzz();
// module.exports = fizzbuzz;
