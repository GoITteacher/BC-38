const refs = {
  usernameElem: document.querySelector('.js-input-username'),
};

refs.usernameElem.addEventListener('blur', e => {
  console.log(e.target.name);
  console.log(e.target.value);
  console.log(e.target.dataset);

  if (e.target.value.length < 6) {
    e.target.classList.remove('is-valid');
    e.target.classList.add('is-invalid');
  } else {
    e.target.classList.remove('is-invalid');
    e.target.classList.add('is-valid');
  }
});
