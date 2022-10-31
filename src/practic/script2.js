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

// function nbYear(p0, percent, aug, p) {
//   let count = 0;
//   while (q <= p) {
//     p0 += p0 * (percent / 100) + aug;
//     count++;
//   }
//   return count;
// }

// nb_year(1500000, 2.5, 10000, 2000000);
// ===============================

// const obj = {
//   update_id: 933443239,
//   message: {
//     message_id: 1224370,
//     from: {
//       id: 433982686,
//       is_bot: false,
//       first_name: 'Volodymyr',
//       username: 'Pikimell',
//       language_code: 'uk',
//     },
//     chat: {
//       id: 433982686,
//       first_name: 'Volodymyr',
//       username: 'Pikimell',
//       type: 'private',
//     },
//     date: 1667226985,
//     text: 'Hello world',
//   },
// // };

// console.log(obj.name1);

const users = [
  {
    name: 'Volodymyr',
    friends: ['Vasya', 'Petya'],
  },

  {
    name: 'Petya',
    friends: ['Vasya'],
  },

  {
    name: 'Vasya',
    friends: [],
  },
];

const result = [];
for (const user of users) {
  for (const friend of user.friends) {
    if (!result.includes(friend)) {
      result.push(friend);
    }
  }
}

console.log(result);
