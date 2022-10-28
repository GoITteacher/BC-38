// https://www.codewars.com/kata/51e0007c1f9378fa810002a9

/* 
i - збільшує значення (спочатку 0)
dзменшує значення
sзводить значення в квадрат
oвиводить значення в масив, що повертається
*/

// function parser(string) {
//   let start = 0;
//   const result = [];
//   for (const value of string) {
//     if (value === 'o') {
//       result.push(start);
//     } else {
//       start = mySwitch(start, value);
//     }
//   }

//   console.log(result);
//   return result;
// }

// function mySwitch(num, value) {
//   switch (value) {
//     case 'i':
//       return num + 1;
//     case 'd':
//       return num - 1;
//     case 's':
//       return num ** 2;
//   }
// }

// parser('iiisdoso');

// =====================================

// function repeatStr(n, s) {
//   let result = '';
//   for (let i = 0; i < n; i += 1) {
//     result += s;
//   }
//   return result;
// }

// repeatStr(3, '*');

// ==========================================
/*
 * Напиши функцию add для сложения произвольного количества аргументов (чисел)
 * - Операция ... (rest)
 */

/* function add() {
  let result = 0;

  console.log(arguments);
  for (let number of arguments) {
    result += number;
  }

  //   for (let i = 0; i < arguments.length; i += 1) {
  //     result += arguments[i];
  //   }

  console.log(result);
  return result;
}

add(1, 2, 3, 2, 4, 1, 56, 7, 2, 21); */

// ==========================================
/*
 * Напиши функцию filterNumbers(array [, number1, ...]) которая:
 * - первым аргументом принимает массив чисел
 * - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
 * - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
 *   для которых есть аналог в оригинальном массиве.
 */

// function filterNumbers(array) {
//   const result = [];
//   for (let i = 1; i < arguments.length; i++) {
//     if (array.includes(arguments[i])) {
//       result.push(arguments[i]);
//     }
//   }

//   console.log(result);
//   return result;
// }

// filterNumbers([1], 2, 1, 4, 6, 2, 4, 6, 2, 1, 1, 3, 4);

// ======================================
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/javascript

// якщо унікальна - (
// інакше - )

// function duplicateEncode(word) {
//   let result = '';
//   for (let i = 0; i < word.length; i += 1) {
//     if (word.indexOf(word[i]) === word.lastIndexOf(word[i])) {
//       result += '(';
//     } else {
//       result += ')';
//     }
//   }
//   console.log(result);
//   return result;
// }

// duplicateEncode('recede');

// ======================================

// function isGoodV1(str) {
//   let counter = 0;
//   for (let i = 0; i < str.length; i += 1) {
//     if (counter < 0) return false;

//     if (str[i] === '(') {
//       counter += 1;
//     } else {
//       counter -= 1;
//     }
//   }
//   if (counter === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function validBraces(braces) {
//   let array = [];
//   for (let i = 0; i < braces.length; i += 1) {
//     if (braces[i] === '(' || braces[i] === '[' || braces[i] === '{') {
//       array.push(braces[i]);
//     } else {
//       switch (braces[i]) {
//         case ')':
//           if (array.pop() !== '(') return false;
//           break;

//         case ']':
//           if (array.pop() !== '[') return false;
//           break;

//         case '}':
//           if (array.pop() !== '{') return false;
//           break;
//       }
//     }
//   }

//   if (array.length === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const res = isGood('({(]})');

// console.log(res);

// ======================================

// function drawACross(n) {
//   const matrix = createArray(n);

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (i === j || i + j === n - 1) {
//         matrix[i][j] = 'x';
//       }
//     }
//   }

//   let result = matrix.join('\n');
//   while (result.includes(',')) {
//     result = result.replace(',', '');
//   }

//   console.log(result);
//   return result;
// }

// function createArray(n) {
//   const array = [];

//   for (let i = 0; i < n; i++) {
//     const matrixArr = [];
//     for (let j = 0; j < n; j++) {
//       matrixArr.push(' ');
//     }
//     array.push(matrixArr);
//   }

//   return array;
// }

// drawACross(5);

// =======================================

// function fiba(num) {
//   if (num < 3) return 1;
//   return fiba(num - 1) + fiba(num - 2);
// }

// function fiba2(num) {
//   let prev1 = 1;
//   let prev2 = 1;
//   for (let i = 2; i < num; i++) {
//     let prev3 = prev1 + prev2;
//     prev1 = prev2;
//     prev2 = prev3;
//   }
//   return prev2;
// }

// console.log(fiba2(10));

// ======================

function factorial(num) {
  if (num < 2) return 1;
  return factorial(num - 1) * num;
}

console.log(factorial(5));
