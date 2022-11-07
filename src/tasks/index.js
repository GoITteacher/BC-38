// let user = {
//   firstName: 'Вася',
//   func: func,
// };

// function func() {
//   console.log(this);
// }

// user.func();

// =========================================

// const obj2 = {
//   name: 'awdawd',
// };

// let obj1 = {
//   name: 'obj1',
//   func() {
//     return () => {
//       console.log(this);
//     };
//   },
// };

// const foo = obj1.func;
// const newFunc = foo();

// newFunc();

// =========================================

// const obj1 = {
//   name: 'obj1',
//   func() {
//     console.log('FUNC', this);

//     return function () {
//       console.log('ARROW', this);
//     };
//   },
// };

// const obj2 = {
//   name: 'obj2',
// };

// const newFunc2 = obj1.func().bind(obj2);
// newFunc2();
// =========================================
