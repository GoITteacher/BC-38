/*
 * Функции
 * - Оголошення функції
 * - Параметри та аргументи
 * - Повернення значення
 * - Порядок Виконання
 * - Параметри за замовчуванням
 * - Псевдомасив та Array.from
 * - Патерн "Ранне повернення"
 * - Function expression (функціональний вираз)
 */
// ======================
// function sum(x, y) {
//   x *= x;
//   y = y * y;
//   return x + y;
// }
// const result = sum(59, 12);
// console.log(result);

// function sum(x, y) {
//   x = pow(x);
//   y = pow(y);
//   return x + y;
// }

// function pow(num) {
//   return num * num;
// }

// console.log(1);
// console.log(sum(10));
// console.log(2);
// ======================
// function foo(x = '', y) {
//   console.log(x, y);
// }
// foo();

// ======================

// function foo() {
//   console.log(arguments);
//     let sum = 0;
//     for (let num of arguments) {
//       sum += num;
//     }
//     console.log(sum);
// }

// foo([2, 4, 6, 25, 7, 3], [2, 4, 6, 25, 7, 3]);
//====================

// const arr = [1, 2, 4, 6, 1, 5, 8, 2, 7, 7, 1, 56, 1];

// function find(x, arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === x) {
//       return true;
//     } else if (arr[i] > 50) {
//       return 1;
//     }
//   }

//   return false;
// }

// console.log(find(10, arr));

// const res = foo();
// console.log(res);

/*
 * - Стек вызовов
 */
