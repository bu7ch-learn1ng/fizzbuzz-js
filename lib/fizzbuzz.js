var fizzbuzz = function (nb)  {

    if ((nb%3 == 0) && (nb%5 == 0)) {
      alert("FizzBuzz");
    }
    
    else if (nb%3 == 0) {
      alert("Fizz");
    }

    else if (nb%5 == 0) {
      alert("Buzz");
    }
    
    else { 
      alert("LOLNOPE");
    }

}


;

module.exports = fizzbuzz;
