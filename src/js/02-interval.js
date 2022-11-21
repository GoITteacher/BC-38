/*
 * Метод setInterval(callback, delay, args)
 */

let count = 0;
const idInterval = setInterval(() => {
  console.log('Hello', count++);
}, 1000);

console.log(idInterval);
// /*
//  * Очистка интервала с clearInterval(intervalId)
//  */
setTimeout(() => {
  clearInterval(idInterval);
}, 5000);
