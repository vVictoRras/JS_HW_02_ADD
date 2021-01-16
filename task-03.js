// Написати ф-ю яка приймає 2 параметра (розміри в ремах - "2rem)
// і   велечину базового шрифта ("20px") і вертає конвертований розмір в
// пікселях.

function converter(rem, px) {
  let result = rem * px;

  return result;
}
console.log(converter(2, 20));
