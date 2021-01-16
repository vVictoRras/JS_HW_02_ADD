// Написати ф-ю countVowels  яка буде приймати строку
// і буде вертати кількість голосних літер. aeiouAEIOU - рядок з
// голосними в англ алфавіті

function countVowels(string) {
  let arr = string.split("");
  let vowels = "aeiouAEIOU";
  let arrVowels = vowels.split("");
  let counter = 0;
   for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arrVowels.length; j += 1) {
      if (arr[i] === arrVowels[j]) {
               counter += 1;
      }
    }
  }
  return counter;
}

console.log(countVowels("the quick brown fox")); // 5
