// function f() {
//   console.log(this);
//   const foo = () => {
//     console.log(this);
//   };
//   return foo;
// }

// const obj = {
//   name: 'obj',
// };
// let obj1 = {
//   name: 'OBJ1',
//   foo1: f.call(obj),
// };

// obj1.foo1();

// ======================

// function f() {
//   console.log(this);
//   function foo() {
//     console.log(this);
//   }
//   return foo;
// }

// const obj = {
//   name: 'obj',
// };
// let obj1 = {
//   name: 'OBJ1',
//   foo1: f.call(obj).bind(window),
// };

// obj1.foo1();
