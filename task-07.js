// Написати ф-ю яка приймає масив і видаляє звідти всі унікальні
// елементи

function nonUniqueElements(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    let counter = arr[i];
    if (newArr[counter] == undefined) {
      newArr[counter] = 0;
    }
    newArr[counter] += 1;
    //console.log(newArr[counter]);
  }
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    let number = arr[i];
    if (newArr[number] > 1) {
      result.push(number);
    }
  }
  return result;
}

console.log(nonUniqueElements([1, 2, 3, 1, 3])); // [1, 3, 1, 3]
console.log(nonUniqueElements([1, 2, 3, 4, 5])); // []
console.log(nonUniqueElements([5, 5, 5, 5, 5])); // [5, 5, 5, 5, 5]
console.log(nonUniqueElements([10, 9, 10, 10, 9, 8])); // [10, 9, 10, 10,9]
