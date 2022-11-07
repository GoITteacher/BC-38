let Ukaraine = {
  value: 'Привіт',
};

function func(surname, name) {
  const a = 10;

  const foo = () => {
    console.log(this);
    return 'test';
  };

  return foo;
}

const myFunc = func();
myFunc();
