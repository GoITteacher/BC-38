// =================

// const apples = 47;
// const grapes = 135;
// let total = 0;
// total += apples + grapes;
// let diff = 0;
// diff += apples - grapes;
// console.log(diff);

// =================

// let students = 100;
// students += 50;
// students -= 50;
// console.log(students);

// =================

// const result = 10 + 20 - 2 * 5;
// console.log(result);

// const res1 = (10 * (10 - 5)) / 2 - 5;
// console.log(res1);

// ======================

// const value = 27.9; //27.9
// console.log(Math.ceil(value));
// console.log(Math.floor(value));
// console.log(Math.round(value));

// ======================

// A has B bots in stock

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150.21;
// const defenceBots = 50.65;
// const message = `${companyName} has ${Math.ceil(
//   repairBots + defenceBots,
// )} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// ========================

/* 
Напиши скрипт который рассчитывает индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк (специально для задачи). Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.

Индекс массиы тела необходимо округлить до одной цифры после запятой;
*/

// let weight = '88,3';
// let height = '1.75';

// weight = Number(weight.replace(',', '.'));
// height = Number(height.replace(',', '.'));
// // let weightUpdate = +weight.replace(',', '.');
// // let weightUpdate = Number.parseFloat(weight);

// const bmi = Number((weight / height ** 2).toFixed(1));

// console.log(bmi);

// ===============================

// console.log(5 > 4);

// console.log(10 >= '7');

// console.log('2' > '12');

// console.log('2' < '12');

// console.log(4 == 4);

// console.log('6' === 6); // f

// console.log('false' === false); // f

// console.log(1 == true); // t

// console.log(1 === true); // f

// console.log('0' == false); // f

// console.log('0' === false); // f

// console.log('Papaya' < 'papaya'); // t

// console.log('Papaya' === 'papaya'); // f

// console.log(undefined == null); // t

// console.log(undefined === null); // f

// ======================================

// console.log(true && 3); // 3

// console.log(false && 3); // false

// console.log(true && 4 && 'kiwi'); // kivi

// console.log(true || 3); // t

// console.log(true || 3 || 4); // t

// console.log(true || false || 7); //t

// console.log(null || 2 || undefined); // 2

// console.log((1 && null && 2) > 0); // false

// console.log(null || (2 && 3) || 4); // 3

// =========================================

// console.log(1 && 5); // 5
// console.log(5 && 1); // 1
// console.log(0 && 2); // 0
// console.log(2 && 0); // 0
// console.log('' && 'Mango'); // ''
// console.log('Mango' && ''); // ''
// console.log('Mango' && 'Poly'); // p
// console.log('Poly' && 'Mango'); // M

// console.log(true || false); // true
// console.log(false || true); // t
// console.log(true || true); // t
// console.log(3 || false); // 3
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); // t

// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // false
// console.log(!'Mango'); // false
// console.log(!0); // true
// console.log(!''); // true

// const isOnline = true;
// const isNotOnline = !isOnline; // false

// ========================

/*
Отрефактори код так, чтобы в переменную value присваивалось значение переменной incomingValue, если оно не равно undefined или null. В противном случае должно присваиваться значение defaultValue. Проверь работу скрипта для слепдующих значений переменной incomingValue: null, undefined, 0, false. Используй оператор ?? (nullish coalescing operator).
*/

/* const incomingValue = null;
const defaultValue = 10;
const value = incomingValue ?? defaultValue;
console.log(value); */

// ===============================

/* 
Напиши скрипт который переведёт значение totalMinutes (количество минут) в строку в формате часов и минут HH:MM.

70 покажет 01:10
450 покажет 07:30
1441 покажет 24:01

*/

/* const totalMinutes = 1441;

const hours = (totalMinutes - (totalMinutes % 60)) / 60 + '';
const min = (totalMinutes % 60) + '';
const result = `${hours.padStart(2, 0)}:${min.padStart(2, 0)}`;
console.log(result);
 */

// ==========================
// const year = 1705;
// const century = Math.ceil(year / 100);
// console.log(century);

// ===========================

// const x = 100;
// const len = x * 2;
// const r = len / Math.PI;
// const q = r ** 2;
// console.log(q);

// ===========================

const x = 41.1;
const y = 0.2;
const z = x + y;
const t = 41.7;
console.log(z);
console.log(t);
console.log(z === t);
