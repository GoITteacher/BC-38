// function func() {
//   console.log(this);
// }

// let user = {
//   firstName: 'Вася',
//   func: func,
// };

// const user2 = {};

// const func3 = user.func.bind(user2);

// func3.call(user);

// =========================================

// const obj2 = {
//   name: 'awdawd',
// };

// let obj1 = {
//   name: 'obj1',
//   func() {
//     console.log('this', this);
//     return ()=>{console.log(this);};
//   },
// };
// debugger;
// const foo = obj1.func.bind(obj2);
// const newFunc = foo();

// console.log(newFunc);

// =========================================
const TESTOBJ = {};
const obj1 = {
  name: 'obj1',
  func() {
    TESTOBJ.name = 'test';
    console.log('FUNC', this);

    return () => {
      console.log('ARROW', this);
    };
  },
};

const obj2 = {
  name: 'obj2',
};

const newFunc2 = obj1.func.call(obj2).bind(obj2);
newFunc2();
// =========================================

// const obj1 = {
//   name: 'obj1',
// };

// const obj2 = {
//   name: 'obj2',
// };

// const obj3 = {
//   name: 'obj3',
//   foo() {
//     console.log(this);
//     return function () {
//       console.log(this);
//     };
//   },
// };

// const myFoo = obj3.foo();

// obj1.foo1 = myFoo;

// obj2.foo2 = obj1.foo1;

// obj2.foo2();

// =============

const obj = {
  foo() {
    console.log(this);
  },
};

obj.foo();
