const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// ==========================
/* const getModels = cars => {
  return cars.map((car, index, array) => {
    const newObj = {
      model: car.model,
      prcie: car.price,
    };

    return newObj;
  });
}; */

function carsModel(car, index, array) {
  return car.model;
}

// const getModels = cars => {
//   return cars.map(carsModel);
// };

// function map(arr, callback) {
//   let result = [];

//   for (let i = 0; i < arr.lenght; i++) {
//     const res = callback(arr[i], i, arr);
//     result.push(res);
//   }

//   return result;
// }

// console.log(getModels(cars));
// ====================

/* 
Пусть функция makeCarsWithDiscount возвращает новый массив объектов с изменным значением свойства price в зависимости от переданной скидки.
*/

// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map((car, i, arr) => {
//     const newObj = { ...car };
//     newObj.price -= newObj.price * discount;
//     return newObj;
//   });
// };

// console.log(cars);
// console.log(makeCarsWithDiscount(cars, 0.2));
// console.log(makeCarsWithDiscount(cars, 0.4));

// =============================

/* 
Пусть функция filterByPrice возвращает массив автомобилей цена которых меньше чем значение параметра threshold.
*/

// const filterByPrice = (cars, threshold) => {
//   return cars.filter((elem,index,array) => elem.price < threshold);
// };

// const filterByPrice = (cars, threshold) => {
//   function callback(elem,index,array) {
//     return elem.price < threshold;
//   }

//   return cars.filter(callback);
// };

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));
// console.table(filterByPrice(cars, 23000));

// =========================

/* 
Пусть функция `getCarsWithDiscount` возвращает массив автомобилей свойство
onSale которых true.
*/

// const getCarsWithDiscount = cars => {
//   return cars.filter(item => item.onSale);
// };

// console.log(getCarsWithDiscount(cars));

// ============================

/* Пусть функция `getCarsWithType` возвращает массив автомобилей тип которых
совпадает со значением параметра `type`. */

// const getCarsWithType = (cars, type) => {
//   return cars.filter(el => el.type === type);
// };

// console.log(getCarsWithType(cars, 'suv'));
// console.log(getCarsWithType(cars, 'sedan'));

// ========================

// const getCarByModel = (cars, model) => cars.find(car => car.model === model);

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

// =====================

/* Пусть функция `sortByAscendingAmount` возвращает новый массив автомобилей
отсортированный по возврастанию значения свойства `amount`. */

// const sortByAscendingAmount = cars => {
//   let newArr = [...cars];
//   return newArr.sort((a, b) => {
//     return a.amount - b.amount;
//   });
// };

// console.table(sortByAscendingAmount(cars));

// =================

// /*
// Пусть функция `sortByDescendingPrice` возвращает новый массив автомобилей
// отсортированный по убыванию значения свойства `price`.
// */

// const sortByDescendingPrice = cars => {
//   return [...cars].sort((a, b) => b.price - a.price);
// };

// console.table(sortByDescendingPrice(cars));

// =====================

/* Пусть функция `sortByModel` возвращает новый массив автомобилей отсортированный
по названию модели в алфавитном и обратном алфавитном порядке, в засисимости от
значения параметра `order`. */

// const sortByModel = (cars, order) => {
//   return [...cars].sort((a, b) => {
//     return order === 'asc'
//       ? a.model.localeCompare(b.model)
//       : b.model.localeCompare(a.model);
//   });
// };

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

// =================
/* Пусть функция `getTotalAmount` возвращает общее количество автомобилей(значение
свойств `amount`). */

// const getTotalAmount = cars => {
//   return cars.reduce((acc, item, index, array) => {
//     return acc + item.amount;
//   }, 50);
// };

// console.log(getTotalAmount(cars));

// const arr = [1, 2, 3, 4, 5, 6, 7, 2];

// function filter(arr) {
//   return arr.reduce((prev, elem) => {
//     if (elem < 4) {
//       prev.push(elem);
//     }
//     return prev;
//   }, []);
// }

// console.log(filter(arr));

// ===========================

/* Пусть функция `getAvailableCarNames` возвращает массив моделей автомобилей, но
только тех, которые сейчас на распродаже. */

// const getModelsOnSale1 = cars => {
//   return cars.filter(el => el.onSale === true).map(el => el.model);
// };

// const getModelsOnSale2 = cars => {
//   return cars.map(el => el.model).filter(el => el.onSale === true);
// };

// const getModelsOnSale3 = cars => {
//   return cars.reduce((acc, car) => {
//     if (car.onSale) {
//       acc.push(car.model);
//     }
//     return acc;
//   }, []);
// };

// console.table(getModelsOnSale3(cars));

// ===========================
/* 
Пусть функция `getSortedCarsOnSale` возвращает массив автомобилей на распродаже
(свойство onSale), отсортированных по возрастанию цены. */

// const getSortedCarsOnSale = cars => {
//   return cars
//     .filter(car => {
//       console.log('filter');
//       return car.onSale;
//     })
//     .sort((a, b) => {
//       console.log(a.price, b.price);
//       return a.price - b.price;
//     });
// };

// console.table(getSortedCarsOnSale(cars));

/// ========================

// function encryptThis(text) {
//   return text.split(' ').map(encryptWord);
// }

// function encryptWord(word) {
//   let result = '';
//   result += word.charCodeAt(0);

//   if (word.length > 2) {
//     result += word[word.length - 1];
//     result += word.slice(2, -1);
//   }

//   if (word.length >= 2) {
//     result += word[1];
//   }

//   return result;
// }

// encryptThis('Hello Wolrd');

// ============================

function decipherThis(str) {
  return str.split(' ').map(decodeWord).join(' ');
}

function decodeWord(word) {
  let firstLetterInt = parseInt(word);
  let firstLetter = String.fromCharCode(firstLetterInt);

  word = word.replace(parseInt(word), '');

  switch (word.length) {
    case 0:
      return firstLetter;
    case 1:
      return [firstLetter, word[0]].join('');
    case 2:
      return [firstLetter, word[1], word[0]].join('');
    default:
      return [
        firstLetter,
        word[word.length - 1],
        word.slice(1, -1),
        word[0],
      ].join('');
  }
}

console.log(decodeWord('72olle'));
