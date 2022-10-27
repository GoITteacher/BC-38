/*
 * Напиши функцию calculateTotalPrice(items)
 * которая принимает массив цен (чисел) и возвращает их сумму
 */

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
const arr = [1, 2, 3];
function calculateTotalPrice(items) {
  let sum = 0;
  for (let item of items) {
    sum += item;
  }
  return sum;
}

let total = calculateTotalPrice(cart);
let total1 = calculateTotalPrice(arr);
console.log(total);
console.log(total1);
