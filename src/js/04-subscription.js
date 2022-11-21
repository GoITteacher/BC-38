import BSN from 'bootstrap.native';

const refs = {
  modal: document.querySelector('#subscription-modal'),
  subscribeBtn: document.querySelector('button[data-subscribe]'),
  hideBtn: document.querySelector('.js-btn-hide'),
};
const modal = new BSN.Modal('#subscription-modal');

const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPTS = 5;
let promptCounter = 0;
let hasSubscribed = false;

function openModal() {
  if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
    return;
  }

  function callback1() {
    modal.hide();
  }
  function callback2() {
    hasSubscribed = true;
    modal.hide();
  }

  setTimeout(() => {
    modal.show();
    promptCounter++;

    refs.hideBtn.addEventListener('click', callback1);
    refs.subscribeBtn.addEventListener('click', callback2);

    refs.modal.addEventListener('hide.bs.modal', function modalHide() {
      refs.hideBtn.removeEventListener('click', callback1);
      refs.subscribeBtn.removeEventListener('click', callback2);
      refs.modal.removeEventListener('hide.bs.modal', modalHide);
      openModal();
    });
  }, PROMPT_DELAY);
}

openModal();
