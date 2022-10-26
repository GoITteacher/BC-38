// ===================
/* 
Example 1 - Базовые операции с массивом
Создайте массив genres с элементами «Jazz» и «Blues».
Добавьте «Рок-н-ролл» в конец.
Выведите в консоль первый элемент массива.
Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
Удалите первый элемент и выведите его в консоль.
Вставьте «Country» и «Reggae» в начало массива.
*/

// const genres = ['Jazz', 'Blues'];
// genres.push('Рок-н-ролл');
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift());
// console.log(genres.unshift('Country', 'Reggae'));
// console.log(genres);

// ================

/* 
Напиши скрипт для вычисления площади прямоугольника со сторонами, значения которых хранятся в переменной values в виде строки. Значения гарантированно разделены пробелом.
*/

// const values = '8 11 10 2 43 65';

// let newArr = values.split(' ');
// console.log(newArr);
// let sqareSquare = 1;
// for (let elem of newArr) {
//   console.log(elem);
//   sqareSquare *= Number(elem);
// }

// console.log(sqareSquare);

// =======================
/* 
Напиши скрипт для перебора массива fruits циклом for. Для каждого элемента массива выведи в консоль строку в формате номер_элемента: значение_элемента. Нумерация элементов должна начинаться с 1.
*/

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

// ==========================

/* 
Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.
*/

/* const names = 'Jacob,William,Solomon,Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';

const namesArr = names.split(',');
const phonesArr = phones.split(',');

console.log(namesArr, phonesArr);

for (let i = 0; i < namesArr.length; i++) {
  console.log(`${namesArr[i]} : ${phonesArr[i]}`);
} */

// ===========================

/* 
Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего. Результирующая строка не должна начинаться или заканчиваться пробельным символом. Скрипт должен работать для любой строки.
*/

// const string = 'Welcome to test the future';
// let strArr = string.split(' ');

// strArr = strArr.slice(1, -1);

// /* strArr.shift();
// strArr.pop(); */

// console.log(strArr);
// console.log(strArr.join(' '));

// ===================

/* Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль. */

// let string = 'Welcome to the future';

// string = string.split('');

// for (let i = 0; i < string.length / 2; i++) {
//   const j = string.length - 1 - i;
//   const newx = string[i];
//   string[i] = string[j];
//   string[j] = newx;
// }

// for (let i = arr.length - 1; i > 0; i--) {
//   newArr.push(arr[i]);
// }

// for (let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
//   let a = arr[i];
//   arr[i] = arr[j];
//   arr[j] = a;
// }

// console.log(string.join(''));

// ============================

// const langs = ['python123', 'python', 'c++', 'haskel', 'php', 'ruby'];
// debugger;
// for (let i = 0; i < langs.length; i++) {
//   for (let j = i; j < langs.length; j++) {
//     if (langs[i][0] > langs[j][0]) {
//       let temp = langs[i];
//       langs[i] = langs[j];
//       langs[j] = temp;
//     }
//   }
// }

// console.log(langs);

//= ================================
// const numbers = [2, 17, -94, 1, 23, 37];
// let min = numbers[0];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }

// console.log(min); // 1

// ===================

// function sortByLength(langs) {
//   for (let i = 0; i < langs.length; i++) {
//     for (let j = i; j < langs.length; j++) {
//       if (langs[i].length > langs[j].length) {
//         let temp = langs[i];
//         langs[i] = langs[j];
//         langs[j] = temp;
//       }
//     }
//   }

//   return langs;
// }

// ===========================

// function removeSmallest(numbers) {
//   let min = numbers[0];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < min) {
//       min = numbers[i];
//     }
//   }
//   numbers.splice(numbers.indexOf(min), 1);
//   return numbers;
// }

// =============================

// function dontGiveMeFive(start, end) {
//   let counter = 0;
//   for (let i = start; i <= end; i++) {
//     if (!i.toString().includes('5')) {
//       counter += 1;
//     }
//   }
//   return counter;
// }

// ============================

// function likeOrDislike(array) {
//   let result = 'Nothing';

//   for (const elem of array) {
//     if (elem !== result) {
//       result = elem;
//     } else {
//       result = `Nothing`;
//     }
//   }

//   return result;
// }

// likeOrDislike([Like, Dislike, Dislike]); // => Nothing - Like - Dislike

// =============================

// function reverse(array) {
//   let newM = [];

//   for (let i = array.length - 1; i >= 0; i -= 1) {
//     newM.push(array[i]);
//   }

//   return newM;
// }

// const result = reverse([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(result);

// =============================

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];

// for (let i = 0; i < arr.length - 1; i++) {
//   if (arr[i + 1] - arr[i] !== 1) {
//     console.log(arr[i + 1]);
//     break;
//   }
// }

// // [1, 2, 3, 4, 6, 7, 8, 9, 11]
// for (let i = 0; i < arr.length; i++) {
//   if (arr[0] + i !== arr[i]) {
//     console.log(arr[i]);
//     break;
//   }
// }

// =================================

// const arr = [1, 2, 3, 4, 5, 6, 1, 3, 4, 1, 4, 6, 7, 2, 4, 5];

// const arrNew = [];

// for (let elem of arr) {
//   if (!arrNew.includes(elem)) {
//     arrNew.push(elem);
//   }
// }

// console.log(arrNew);
