/*
 * Метод window.setTimeout(callback, delay, args)
 */

// console.log('start');

// function callback(str1, str2) {
//   console.log(str1, str2);
// }

// let result = setTimeout(callback, 5000, 'Hello', 'World');

// console.log(result);
// console.log('end');

/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

// let result = setTimeout(
//   (s1, s2) => {
//     console.log(s1, s2);
//   },
//   5000,
//   'Hello',
//   'World',
// );

// clearTimeout(result);
setTimeout(() => {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
    // setTimeout(() => {
    //   console.log(i);
    // }, i * 1000);
  }
}, 5000);
