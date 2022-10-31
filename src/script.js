// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   for (let i = 0; i < stones.length; i++) {
//     if (stones[i].name === stoneName) {
//       return stones[i].price * stones[i].quantity;
//     }
//   }

//   return null;
// }

// const res = calcTotalPrice(stones, 'Сапфир');

// console.log(res);

const MORSE_CODE = {};
const decodeMorse = function (morseCode) {
  let words = morseCode.split('   ');
  console.log(words);
  for (let i = 0; i < words.length; i++) {
    let letters = words[i].split(' ');
    for (let j = 0; j < letters.length; j++) {
      letters[j] = MORSE_CODE[letters[j]];
    }
    words[i] = letters.join('');
  }
  return words.join(' ');
};

decodeMorse('.... . -.--   .--- ..- -.. .');
