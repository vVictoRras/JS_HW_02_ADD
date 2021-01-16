// Написати ф-ю calculateDogAge яка приймає один
// параметр - вік собачки. Результатом її роботи буде вік перевединий
// на людський (1 рік собаки це 7 років в людини)

function calculateDogAge(dogAge) {
  let humanAge = dogAge * 7;
  return humanAge;
}
console.log(calculateDogAge(10));