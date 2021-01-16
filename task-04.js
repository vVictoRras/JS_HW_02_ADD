// Написати ф-ю що приймає число (температура в цельсіях) і виводить
// результат в фаренгейтах

function converter(cel) {
  let celcium = cel;
  let far = celcium * (9 / 5) + 32;
  return far;
}
console.log(converter(25) + " " + "F");
