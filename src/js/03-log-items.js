/*
 * Напиши функцию logItems(items) для перебора и логирования массива
 */

const array = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// joinV2([1, 2, 3, 4, 5], ',');
// joinV2(['клавиатура', 'наушники', 'часы'], ';');

const logItems = function (array) {
  for (let item of array) {
    console.log(item);
  }
};

logItems(array);

function joinV2(array, delimiter) {
  let str = '';

  for (let item of array) {
    str += item + delimiter;
  }

  str = str.slice(0, -delimiter.length);

  return str;
}

console.log('============');
console.log(joinV2(['Mango', 'Kiwi', 'Poly', 'Ajax'], '\n'));
