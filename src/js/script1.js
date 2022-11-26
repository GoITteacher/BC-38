import { TranslateAPI } from './modules/translateAPI';
const translateAPI = new TranslateAPI();

const refs = {
  formEl: document.querySelector('.js-form'),
  resultEl: document.querySelector('.js-result'),
};

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const formValue = e.target.elements.translate.value;
  translateAPI.translate(formValue).then(data => {
    refs.resultEl.innerHTML = data.translatedText;
  });
});
