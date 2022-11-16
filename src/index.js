import { Bank } from './Bank.js';
const privatBank = new Bank();
console.log(privatBank);

const refs = {
  inputEl: document.querySelector('.js-input'),
  btnDeposit: document.querySelector('.js-deposit'),
  btnWithdraw: document.querySelector('.js-withdraw'),
  balanceElem: document.querySelector('.js-balance'),
  historyElem: document.querySelector('.js-history'),
};
