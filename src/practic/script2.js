// function foo(arr) {
//   let count = 0;
//   while (findPositive(arr)) {
//     const max = getMax(arr);
//     const firstIndex = arr.indexOf(max);
//     const lastIndex = arr.lastIndexOf(max);

//     if (firstIndex !== lastIndex) {
//       for (let i = firstIndex; i <= lastIndex; i++) {
//         if (arr[i] !== max) {
//           count++;
//         } else {
//           arr[i] -= 1;
//         }
//       }
//     } else {
//       arr[firstIndex] -= 1;
//     }
//   }

//   console.log(count);
// }

// function getMax(arr) {
//   let max = 0;

//   for (const elem of arr) {
//     if (elem > max) {
//       max = elem;
//     }
//   }

//   return max;
// }

// function findPositive(arr) {
//   for (const elem of arr) {
//     if (elem > 0) return true;
//   }
//   return false;
// }

// foo([4, 0, 2, 4, 2, 4]);

/// ============================

// const arrForSort = [1, 3, 5, 2, 6, 3, 6, 8, 2, 6, 8];

// function sort(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i; j < array.length; j++) {
//       let left = array[i];
//       let right = array[j];
//       if (left > right) {
//         const x = array[i];
//         array[i] = array[j];
//         array[j] = x;
//       }
//     }
//   }
//   console.log(array);
// }

// const arr = [
//   [1, 2, 54, 7, 2, 2, 4, 6, 32, 6],
//   [5, 7, 2, 6, 4],
//   [5, 2, 54, 7, 2, 4, 6],
//   [1, 3, 8, 3, 2],
//   [1, 1, 7, 8],
// ];

// function sortV2(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//       for (let y = 0; y < array.length; y++) {
//         for (let x = 0; x < array[y].length; x++) {
//           debugger;
//           const left = array[i][j];
//           const right = array[y][x];
//           if (left < right) {
//             const temp = left;
//             array[i][j] = array[y][x];
//             array[y][x] = temp;
//           }
//         }
//       }
//     }
//   }

//   console.table(array);
// }

// sortV2(arr);

// ===================

nb_year(1500000, 2.5, 10000, 2000000);
