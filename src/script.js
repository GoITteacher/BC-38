// ====================

/* Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
независимых аргументов. */

/* function calcBMI({ weight = '1', height = '1' } = {}) {
  const numericWeight = Number(weight.replace(',', '.'));
  const numericHeight = Number(height.replace(',', '.'));
  return Number((numericWeight / numericHeight ** 2).toFixed(1));
}

console.log(calcBMI('88,3', '1.75'));

const obj = {
  weight: '88,3',
  height: '1.75',
};

console.log(calcBMI(obj)); */

// =======================

/* Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
независимых аргументов. */

/* const params = {
  paramsNames: 'Jacob,William,Solomon,Artemis',
  paramsPhones: '89001234567,89001112233,890055566377,890055566300',
};

function printContactsInfo({ paramsNames: names = '', phones = '' } = {}) {
  names = names.split(',');
  phones = phones.split(',');
  for (let i = 0; i < names.length; i++) {
    console.log(names[i], phones[i]);
  }
}

// Было
// printContactsInfo('', '');

// Ожидается

printContactsInfo(params);
printContactsInfo({}); */

// =======================================

/* Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
независимых аргументов.
 */

/* function getBotReport1(obj) {
  const { companyName, repairBots, defenceBots } = obj;
  return `${companyName} has ${repairBots + defenceBots} bots in stock`;
}
function getBotReport2({ companyName, repairBots, defenceBots } = {}) {
  return `${companyName} has ${repairBots + defenceBots} bots in stock`;
}

const obj = {
  companyName: 'TEsla',
  repairBots: 123,
  defenceBots: 345,
};
console.log(getBotReport1(obj));
console.log(getBotReport2());
 */

// ===========================

/* function getStockReport({ companyName, stock }) {
  const values = Object.values(stock);
  console.log(values);
  let sum = 0;
  for (let value of values) {
    sum += value;
  }
  return `${companyName} has ${sum} item in stock`;
}

console.log(
  getStockReport({
    companyName: 'Cyberdyne Systems',
    stock: {
      shoe234s: 20,
      ha4ts: 26,
    },
  }),
); */
//'Cyberdyne Systems has 200 items in stock';

// =============================

/* 
Дополни функцию `createContact(partialContact)` так, чтобы она возвращала новый
объект контакта с добавленными свойствами `id` и `createdAt`, а также `list` со
значением "default" если в `partialContact` нет такого свойства.

1. create a function +
2. create a resul object
3. add props to object
4. add list if prtialsContact doesn't have a property default
*/
/* 
function createContact(obj) {
  const resultObj = {
    id: 'someid',
    createAt: 'some param',
    list: 'default',
    ...obj,
  };
  return resultObj;
}

console.log(
  createContact({
    name: 'Mango',
    email: 'mango@mail.com',
    list: 'friends',
  }),
);
console.log(
  createContact({
    name: 'Poly',
    email: 'poly@hotmail.com',
  }),
);
console.log(
  createContact({
    age: 'Poly',
    stock: 'poly@hotmail.com',
  }),
); */

// =============================

/* Напиши функцию `transformUsername(user)` так, чтобы она возвращала новый обьект
со свойством `fullName`, вместо `firstName` и `lastName`. */

/* function transformUsername({ firstName, lastName }) {
  const obj = {
    fullName: firstName + lastName,
  };

  return obj;
} */

// =======================

// Напишите функцию, которая возвращает вложенный массив вида [[key, value], [key, value]]

/* function doubleArray(obj) {
  let arr = [];
  for (let key of Object.keys(obj)) {
    arr.push([key, obj[key]]);
  }

  return arr;
}

const user = {
  name: 'Mango',
  email: 'mango@mail.com',
  list: 'friends',
};

console.log(doubleArray(user)); */
// ==================================

/* 
Напишите функцию, которая возвращает новый объект без указанных значений.
*/

// function createObj(...props) {
//   let newObj = {};

//   for (let i = 0; i < props.length; i++) {
//     const newKey = `prop${i + 1}`;
//     newObj[newKey] = props[i];
//   }
//   console.log(newObj);
// }

// function createObj(...props) {
//   let newObj = {};
//   let index = 0;
//   for (let value of props) {
//     const newKey = `prop${index++ + 1}`;
//     newObj[newKey] = value;
//   }
//   console.log(newObj);
// }

// createObj('234', [], {}, true, 2, 4, 2, 5, 1, 43, 5, 1);

// ===============================

// function createObj(arr, ...other) {
//   const newObj = {};
//   for (let i = 0; i < arr.length; i++) {
//     const key = arr[i];
//     newObj[key] = other[i];
//   }
//   console.log(newObj);
// }

// createObj(['prop1', 'prop2', 'prop3', 'prop4', 'prop5', 'prop6'], [], {});

// =================

// Напишите функцию, которая делает поверхностную проверку объекта на пустоту.

// function trueObject(obj) {
//   const values = Object.values(obj);
//   for (const x of values) {
//     if (!x || x.length === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// const obj = {
//   age: 123,
//   name: {}, //null, '', []
// };

// =============================

// const arr = [];

// arr.toString = () => {
//   console.log('HELLO');
//   return 'test';
// };

// let num = 'awd';

// num.t = () => {
//   console.log('This is num');
//   return 'test num';
// };

// console.log(num);

// =================================

/* 
    Напишите функцию, которая поверхностно сравнивает два объекта.
*/

// function isEqual(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);
//   if (keys1.length !== keys2.length) {
//     return false;
//   }
//   for (let i = 0; i < keys1.length; i++) {
//     if (keys1[i] !== keys2[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// function isEqual2(obj1, obj2) {

//   for (let x of obj1) {
//     if(!obj2.hasOwnProperty(x)){
//         return false;
//     }
//   }
//   return true;
// }

// =============================

/* 
Напишите функцию, которая вызывает метод массива на заданный путь объекта.
*/

/* function getProps(path, obj) {
  const pathArray = path.split(',');
  console.log(pathArray);
  for (let key of pathArray) {
    obj = obj[key];
    console.log(obj);
  }
  return obj;
}

const obj = {
  FIO: {
    firstname: 1,
    lastname: 1,
    patronymic: 1,
  },
  addres: {
    street: {
      name: 123,
      house: 123,
    },
    country: {
      name: 123,
      city: 234,
    },
  },
};
getProps('addres,street,house', obj); */

// =======================

/* 
// Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.
*/

// 1. function

function crossObjects(obj1, obj2) {
  const totalObj = {};

  for (const key of Object.keys(obj1)) {
    if (obj2.hasOwnProperty(key)) {
      totalObj[key] = obj1[key];
    }
  }
  return totalObj;
}
