var fizzbuzz = function ()  {
 function fizzbuzz (compteur){
 if(compteur % 15 == 0){
  console.log("FizzBuzz");
 }else if (compteur % 5 == 0) {
  console.log("Buzz");
 }else if (compteur % 3 == 0) {
   console.log("Fizz");
  }else {
  return compteur.toString();
  }
 }
 fizzbuzz(15);
};
fizzbuzz();
// module.exports = fizzbuzz;
