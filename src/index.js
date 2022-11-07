/* Напишите метод `calcTotalPrice(stoneName)`, который принимает название камня и
рассчитывает и возвращает общую стоимость камней с таким именем, ценой и
количеством из свойства `stones`.
 */
// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const currentObj = this.stones.find(el => el.name === stoneName);
//     if (currentObj !== undefined) {
//       return currentObj.price * currentObj.quantity;
//     }
//     return 0;
//   },
// };

// console.log(chopShop.calcTotalPrice('Diamond1'));

// ===================================

/* Выполните рефакторинг методов объекта `phonebook` чтобы код заработал. 
- add id
- 
*/

/* const phonebook = {
  contacts: [],

  add(contact) {
    const obj = {
      id: this.generateId(),
      list: 'default',
      ...contact,
    };
    console.log(obj);
  },
  generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  },
  getDate() {
    return Date.now();
  },
};

console.log(
  phonebook.add({
    name: 'Mango',
    email: 'mango@mail.com',
    list: 'friends',
  }),
);
console.log(
  phonebook.add({
    name: 'Poly',
    email: 'poly@hotmail.com',
  }),
); */

// =====================================

/* 
Создайте объект `calculator` с тремя методами:

- `read(a, b)`- принимает два значения и сохраняет их как свойства объекта.
- `add()` - возвращает сумму сохранённых значений.
- `mult()` - перемножает сохранённые значения и возвращает результат.
*/

// const calculator = {
//   read(a, b) {
//     this.valueA = a;
//     this.valueB = b;
//   },
//   add() {
//     return this.valueA + this.valueB;
//   },
//   mult() {
//     return this.valueA * this.valueB;
//   },
// };

// calculator.read(10, 20);
// console.log(calculator);
// console.log(calculator.mult());
