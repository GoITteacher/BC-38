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
// =====================================

// const tableCars = document.querySelector('.js-table-cars');
// const tableBody = tableCars.lastElementChild;

// function showCars() {
//   const filteredCars = cars.filter(item => item.price > 30000);
//   tableBody.innerHTML = createMarkupTableBody(filteredCars);
// }
// showCars();

// function createMarkupTableBody(array) {
//   return array
//     .map(item => {
//       return `
//     <tr>
//         <td>${item.make}</td>
//         <td>${item.model}</td>
//         <td>${item.type}</td>
//         <td>${item.amount}</td>
//         <td>${item.price}</td>
//         <td>${item.onSale}</td>
//     </tr>
//     `;
//     })
//     .join('');
// }

// tableCars.insertAdjacentHTML('beforeend', createMarkupTableBody(cars));
// =====================================
// const filteredArr = Array.from(new Set(cars.map(el => el.make)));
// const listCarsEl = document.querySelector('.js-list-cars');

// const filteredArr = cars
//   .map(el => el.make)
//   .filter((el, index, arr) => {
//     return arr.indexOf(el) === index;
//   });

// console.log(filteredArr);
// function createMarkupForCars(make) {
//   let markup = `
//   <li>
//     <h3>${make}</h3>
//     <ul>
//   `;

//   markup += cars
//     .filter(car => car.make === make)
//     .map(car => {
//       return `<li>${car.model}</li>`;
//     })
//     .join('');

//   markup += `</ul></li>`;

//   return markup;
// }

// function createMarkup(array) {
//   return array
//     .map(el => {
//       return createMarkupForCars(el);
//     })
//     .join('');
// }

// function showMarkup() {
//   const markup = createMarkup(filteredArr);
//   listCarsEl.insertAdjacentHTML('afterbegin', markup);
// }

// showMarkup();

// // ============================

// function countCars() {
//   const list = listCarsEl.querySelectorAll(':scope > li');
//   console.log('Number of categories:', list.length);

//   list.forEach(el => {
//     console.log(
//       el.firstElementChild.textContent,
//       el.querySelectorAll(`li`).length,
//     );
//   });
// }

// countCars();
