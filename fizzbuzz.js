var fizzbuzz = function ()  {
  var i = Number(prompt("Entrez un nombre"));
    if ((i % 3 === 0) && (i % 5 !== 0)) {
      console.log("fizz");

    } else if ((i % 5 === 0) && (i % 3 !== 0)) {
      console.log("buzz");

    } else if ((i % 5 === 0) && (i % 3 === 0)) {
      console.log("fizzbuzz");

    } else {
    console.log(i);
    }
  }
fizzbuzz();
