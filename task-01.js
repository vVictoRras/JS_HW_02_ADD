// Написати ф-ю <strong>capitalize</strong> яка буде приймати строку
// і буде вертати нову строку де кожне слово буде починатися з
//  великої літери.
let newArr = [];
let newStr;
function capitalize(string){
let arr = string.split(' ');
for (let elem of arr){
 let newElement = elem[0].toUpperCase()+elem.slice(1);
   newArr.push(newElement);
   newStr = newArr.join(' ');
} 
 return newStr;
}

console.log(capitalize('the quick brown fox')); // 'The Quick Brown Fox '