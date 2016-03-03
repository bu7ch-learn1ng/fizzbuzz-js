
for (var i = 1 ; i <= 100 ; i ++) {
  var i = Number(prompt("Entrez un nombre"));
  if ((i % 3 === 0) && (i % 5 !== 0)) {
    return("fizz");
    break;

  } else if ((i % 5 === 0) && (i % 3 !== 0)) {
    return("buzz");
    break;

  } else if ((i % 5 === 0) && (i % 3 === 0)) {
    return("fizzbuzz");
    break;

  } else {
  return(i);
  break;
  }
}
