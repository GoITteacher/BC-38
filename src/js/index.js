const btnElem = document.querySelector('.js-btn');

btnElem.addEventListener('click', onBtnClick);

function onBtnClick(e) {
  const myObj = {
    title: 'title',
    author: 'author',
    desc: 'desc',
  };

  const BASE_URL = 'http://localhost:3000/books';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(myObj),
  };
  fetch(BASE_URL, options);
}
