let user1 = {
  name: 'Petya',
  setName() {
    this.name = name;
    console.log(this);
  },
};

user1.setName();

let user2 = {
  name: 'Vasya',
  age: 'TEST',
};

let newName = user1.setName;

newName('12312');

console.log(user1);
console.log(user2);
