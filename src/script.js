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

const filterByPrice = (cars, threshold) => {};

console.table(filterByPrice(cars, 30000));
console.table(filterByPrice(cars, 25000));
