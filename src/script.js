/* const MORSE_CODE = {};
const decodeMorse = function (morseCode) {
  let words = morseCode.split('   ');
  console.log(words);
  for (let i = 0; i < words.length; i++) {
    let letters = words[i].split(' ');
    for (let j = 0; j < letters.length; j++) {
      letters[j] = MORSE_CODE[letters[j]];
    }
    words[i] = letters.join('');
  }
  return words.join(' ');
};
 */
//decodeMorse('.... . -.--   .--- ..- -.. .');

// ==========================================

// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   for (let i = 0; i < stones.length; i++) {
//     if (stones[i].name === stoneName) {
//       return stones[i].price * stones[i].quantity;
//     }
//   }

//   return null;
// }

// const res = calcTotalPrice(stones, 'Сапфир');

// console.log(res);

// ===================================

/* 
Напиши скрипт, который, для объекта user, последовательно:

добавляет поле mood со значением 'happy'
заменяет значение hobby на 'skydiving'
заменяет значение premium на false
выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
*/

/* const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

console.log(Object.keys(user));
for (let key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}
 */

// =====================

/* 

У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.
*/

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;
// for (const elem of Object.values(salaries)) {
//   sum += elem;
// }
// for (const key of Object.keys(salaries)) {
//   sum += salaries[key];
// }
// console.log(sum);

// =================

/* 
Напишите ф-цию calcTotalPrice(stones, stoneName), которая принимает массив обьектов и строку с названием камня. Ф-ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта
*/

// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];

// function calculateTotalPrice(stones, stoneName) {
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }

//   return 0;
// }

// console.log(calculateTotalPrice(stones, 'Изумsefруд'));

// ===================================

/* 
Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
*/

// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// const account = {
//   balance: 0,
//   transactions: [],

//   createTransaction(amount, type) {
//     const transactions = {
//       id: randomID(),
//       type,
//       amount,
//     };
//     return transactions;
//   },

//   deposit(amount) {
//     if (amount > 0) {
//       this.balance += amount;
//       const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//       this.transactions.push(transaction);
//     }
//   },
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log('снятие такой суммы не возможно, недостаточно средств.');
//     } else {
//       this.balance -= amount;
//       const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//       this.transactions.push(transaction);
//     }
//   },
//   getBalance() {
//     return this.balance;
//   },
//   getTransactionDetails(id) {
//     for (let i = 0; i < this.transactions.length; i++) {
//       if (id === this.transactions[i].id) {
//         return this.transactions[i];
//       }
//     }
//   },
//   getTransactionTotal(type) {
//     let sum = 0;
//     for (const tr of this.transactions) {
//       if (tr.type === type) {
//         sum += tr.amount;
//       }
//     }
//     return sum;
//   },
// };
// ====================================

/* 
Написати систему контролю банку.

Властивості:
- список користувачів [userId, FIO,'password']
- список рахунків [userId, accountNumber, value]

Методи:
- додати користувача
- видалити користувача

- створити рахунок
- видалити рахунок

- додати гроші на рахунок
- зняти гроші з рахунка

- переглянути баланс на рахунку
- переглянути сумарний баланс на усіх рахунках

- отримати список користувачів у яких баланс менший за N
- отримати список користувачів у яких баланс більший за N
*/

const bank = {
  users: [],
  account: [],

  addUser(login, password) {
    let user = {
      userId: randomID(),
      login,
      password,
    };

    this.users.push(user);

    this.createAccount(user.userId);
  },

  deleteUser(id) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].userId === id) {
        this.users.splice(i, 1);
        this.deleteAccountForUser(id);
        return;
      }
    }

    console.log('User with this id not found');
  },

  createAccount(id) {
    const account = {
      userId: id,
      accountId: randomID(),
      balance: 0,
    };

    this.account.push(account);
  },

  deleteAccount(id) {
    for (let i = 0; i < this.account.length; i++) {
      if (this.account[i].accountId === id) {
        this.account.splice(i, 1);
        return;
      }
    }

    console.log('User with this id not found');
  },

  deleteAccountForUser(id) {
    const filterAccount = [];
    for (let i = 0; i < this.account.length; i++) {
      if (this.account[i].userId !== id) {
        filterAccount.push(this.users[i]);
      }
    }
    this.account = filterAccount;
  },

  deposit(amount, id) {
    for (let i = 0; i < this.account.length; i++) {
      if (this.account[i].accountId === id) {
        if (amount > 0) {
          this.account[i].balance += amount;
        } else {
          console.log('Deposit must be a positive value');
        }
        return;
      }
    }
  },

  withdraw(amount, id) {
    for (let i = 0; i < this.account.length; i++) {
      if (this.account[i].accountId === id) {
        if (amount <= this.account[i].balance && amount > 0) {
          this.account[i].balance -= amount;
        } else {
          console.log('Withdraw must be less or equal to balance');
        }
        return;
      }
    }
  },

  getBalance(id) {
    for (let account of this.account) {
      if (account.accountId === id) {
        return account.balance;
      }
    }
  },

  getTotalBalance(userId) {
    let sum = 0;
    for (let account of this.account) {
      if (account.userId === userId) {
        sum += account.balance;
      }
    }
    return sum;
  },

  getUserWithSmallBalance(min) {
    let res = [];

    for (let user of this.users) {
      let totalBalance = this.getTotalBalance(user.userId);

      if (totalBalance < min) {
        res.push(user);
      }
    }

    return res;
  },

  getVipUsers(max) {
    let res = [];
    for (let user of this.users) {
      let totalBalance = this.getTotalBalance(user.userId);
      if (totalBalance > max) {
        res.push(user);
      }
    }
    return res;
  },
};

let randomID = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

// =======================

bank.addUser('1', '1');
const accountId = bank.account[0].accountId;
const userId = bank.users[0].userId;

bank.deposit(1000, accountId);
bank.deposit(1000, accountId);
bank.deposit(1000, accountId);
bank.withdraw(700, accountId);
bank.createAccount(userId);

bank.deleteUser(userId);

console.log(bank.users);
console.log(bank.account);
