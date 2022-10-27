/*
 * Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

function findSmallesNumber(numbers) {
  let min = Infinity;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

function findSmallesNumber1(numbers) {
  let min = ~Infinity;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > min) {
      min = numbers[i];
    }
  }
  return min;
}

console.log(findSmallesNumber1([])); // 4
console.log(findSmallesNumber1([-2, -2, -2, -2, 15])); // -2
console.log(findSmallesNumber1([100, 54, 8, 12, 47])); // 8
console.log(findSmallesNumber1([7, 21, 84, 15, 4])); // 4
