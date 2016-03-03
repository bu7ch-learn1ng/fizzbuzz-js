var fizzbuzz = function (int)  {
    var int = prompt("Indiquez un chiffre");
    if (int % 3 == 0){
        alert("Fizz");
    } else if (int % 5 == 0){
        alert("Buzz");
    } else if (int % 3 == 0 && int % 5 == 0){
        alert("FizzBuzz");
    }
};

module.exports = fizzbuzz;
