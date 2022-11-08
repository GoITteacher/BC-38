// class Blogger {
//   email;
//   age;
//   posts;

//   constructor({ name, age, topics }) {
//     this.email = name;
//     this.age = age;
//     this.posts = topics;
//   }

//   getInfo() {
//     return `User ${this.email} is ${this.age} years old and has ${this.posts.length} posts`;
//   }

//   newPosts(posts) {
//     this.posts = [...this.posts, ...posts];
//   }

//   removePosts(id) {
//     this.posts = this.posts.filter(post => post.id !== id);
//   }
// }

// const mango = new Blogger({
//   name: 'mango@mail.com',
//   age: 24,
//   topics: [],
// });

// const post = {
//   id: 0,
//   name: '',
//   description: '',
// };

// mango.newPosts([post]);

// console.log(mango.posts);

// mango.removePosts(0);

// console.log(mango.posts);

// ======================================
// class MyStorage {
//   #items = '';
//   constructor(items) {
//     this.#items = items;
//   }

//   get items() {
//     return this.#items;
//   }

//   set items(x) {
//     this.#items = x;
//   }

//   addItems(item) {
//     this.#items.push(item);
//   }
//   removeItem(item) {
//     this.#items = this.#items.filter(fruit => fruit !== item);
//   }
// }

// const myStorage = new MyStorage([]);
// console.log(myStorage.items);
// myStorage.items = 123;
// ======================================

// class User {
//   #login;
//   #email;
//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie

// ==================================

// class Notes {
//   items = [];
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   };
//   addNote(note) {
//     this.items.push(note);
//   }
//   removeNote(text) {
//     this.items = this.items.filter(element => element.text !== text);
//   }
//   updateNote(text, newPriority) {
//     this.items.find(element => element.text === text).priority = newPriority;
//   }
// }
// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя первая заметка', priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: 'Моя вторая заметка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote('Моя первая заметка');
// console.log(myNotes.items);

// myNotes.updateNote('Моя вторая заметка', Notes.Priority.HIGH);
// console.log(myNotes.items);
// ======================================

// class Toggle {
//   #on = false;
//   constructor({ isOpen = false } = {}) {
//     this.#on = isOpen;
//   }
//   get on() {
//     return this.#on;
//   }
//   set on(isOpen) {
//     if (typeof isOpen === 'boolean') {
//       this.#on = isOpen;
//     }
//   }

//   toggle() {
//     this.#on = !this.#on;
//   }
// }

// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');

// ==================
// class MyString {
//   static reverse(string) {
//     return string.split('').reverse().join('');
//   }
//   static ucFirst(string) {
//     return string.replace(string[0], string[0].toUpperCase());
//   }
//   static ucWords(string) {
//     return string
//       .split(' ')
//       .filter(word => word[0] === word[0].toLowerCase())
//       .map(word => MyString.ucFirst(word))
//       .join(' ');
//   }
// }

// const string = 'Hello world! Whats up';

// console.log(MyString.ucWords(string));

// =========================

class Validator {
  email;

  constructor(email) {
    this.email = email;
  }

  static isEmail(email) {
    return (
      email.search(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/) !== -1
    );
  }
  static isDomain(domain) {
    return (
      domain.search(
        /^(([^:/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
      ) !== -1
    );
  }
  static isOrksNumber(number) {
    return number.search(/^[+]7[0-9]{8}/) !== -1;
  }
}

console.log(Validator.isEmail('awdawd@gmail'));
console.log(Validator.isDomain('www.awdawd.com'));
console.log(Validator.isOrksNumber('+74234234987'));
