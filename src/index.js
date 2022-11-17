import { Bank } from './Bank.js';
import { loadFromLS, saveToLS } from './helpers';

const banks = [new Bank(), new Bank(), new Bank()];

const refs = {
  formElem1: document.querySelector('.js-form1'),
  formElem2: document.querySelector('.js-form2'),
  formContainer: document.querySelector('.js-form-container'),
};

// =====================

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.target.reset();
  const formIndex = evt.target.dataset.index;
  //localStorage.removeItem('inputValue');
  saveToLS(`inputValue${formIndex}`, '');
}

// =====================

function onLoadWindow() {
  const forms = refs.formContainer.querySelectorAll('form');
  for (let i = 0; i < localStorage.length / 2; i++) {
    const input = loadFromLS(`inputValue${i + 1}`);
    forms[i].elements['input-value'].value = input;

    const receive = loadFromLS(`bankObj${i + 1}`);
    if (receive) {
      banks[i].balance = receive.balance;
      banks[i].historyTransaction = receive.historyTransaction;
      renderData(banks[i], forms[i]);
    }
  }
}
onLoadWindow();

refs.formContainer.addEventListener('input', onInputChange);
function onInputChange(e) {
  const formIndex = e.target.parentNode.dataset.index;
  const value = e.target.value;
  saveToLS(`inputValue${formIndex}`, value);
}

refs.formContainer.addEventListener('click', onFormClick);
function onFormClick(e) {
  if (e.target.nodeName !== 'BUTTON') return;

  const typeBtn = e.target.name;
  const formIndex = Number(e.target.closest('form').dataset.index);

  if (typeBtn === 'deposit-btn') {
    const form = e.target.closest('form');
    const value = form.elements['input-value'].value;

    banks[formIndex - 1].deposit(value);

    renderData(banks[formIndex - 1], form);
    saveDataBank(banks[formIndex - 1], formIndex);
  } else {
    const form = e.target.closest('form');
    const value = form.elements['input-value'].value;

    banks[formIndex - 1].withdraw(value);

    renderData(banks[formIndex - 1], form);
    saveDataBank(banks[formIndex - 1], formIndex);
  }
}

function renderData(bank, form) {
  const balanceElem = form.querySelector('[name=balance]');
  const historyElem = form.querySelector('[name=history]');

  balanceElem.textContent = bank.balance;
  const historyMarkup = bank.historyTransaction
    .map(elem => {
      return `
    <li>${elem.type == 'deposit' ? '+' : '-'}${elem.value}</li>
    `;
    })
    .join('');
  historyElem.innerHTML = historyMarkup;
}

function saveDataBank(bank, index) {
  saveToLS(`bankObj${index}`, bank);
}

// =====================

// JSON.stringify(value)
// JSON.parse(jsonValue)

// localStorage.getItem(key)
// localStorage.setItem(key,value)
