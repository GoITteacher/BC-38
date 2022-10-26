/* 
## Example 1 - Ввод пользователя и ветвления

Используя конструкцию if..else и prompt, напиши код, который будет спрашивать:
`"Какое официальное название JavaScript?"`. Если пользователь вводит
`ECMAScript`, то показывай alert со строкой `"Верно!"`, в противном случае -
`"Не знаете? ECMAScript!"`
*/

/* let answer = prompt('Какое официальное название JavaScript?');

if (answer === 'ECMAScript') {
  alert('Верно!');
} else {
  alert('Не знаете? ECMAScript!');
} */

// ============================

//"14 ч. 26 мин."
//"14 ч."

/* const hours = 14;
const minutes = 30;

// let timestring = `${hours} ч.`;
// if (minutes !== 0) {
//   timestring += ` ${minutes} мин.`;
// }

// let timestring = `${hours} ч. ${minutes} мин.`;
// if (minutes === 0) {
//   timestring = `${hours} ч.`;
// }

console.log(timestring); */

// ==============================

/* 
Напиши скрипт, который выводит в консоль строку "Это положительное число", если в prompt пользователь ввел число больше нуля. Если был введен ноль, выводи в консоль строку "Это ноль". Если передали отрицательное число, в консоли должна быть строка "Это отрицательное число".
*/
/* 
const userInput = Number(prompt('Введите число'));

if (userInput > 0) {
  console.log('>0');
} else if (userInput === 0) {
  console.log('=0');
} else {
  console.log('<0');
}

console.log(userInput); */

// =================================

/* 
Напиши скрипт, который сравнивает числа в переменных a и b. Если оба значения больше 100, то выведи в консоль максимальное из них. В противном случае в консоли должна быть сумма значения b и числа 512.
*/

// const a = 150;
// const b = 155;

// if (a > 100 && b > 100) {
//   const max = a > b ? a : b;
//   console.log(max);
// } else {
//   console.log(b + 512);
// }

// if (a > 100 && b > 100) {
//   let max;
//   if (a > b) {
//     max = a;
//   } else {
//     max = b;
//   }
//   console.log(max);
// } else {
//   console.log(b + 512);
// }

// if (a > 100 && b > 100) {
//   const max = Math.max(a, b);
//   console.log(max);
// } else {
//   console.log(b + 512);
// }

// ======================

/* 
Напиши скрипт который проверяет заканчивается ли значение переменной link символом /. Если нет, добавь в конец значения link этот символ. Используй конструкцию if...else.
*/

let link = 'https://my-site.com/about';
// Пиши код ниже этой строки
link.endsWith('/');
if (link === true)
  // Пиши код выше этой строки
  console.log(link);
