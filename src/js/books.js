import '../css/common.css';
import booksTemplate from '../templates/card-books.hbs';
import bookTemplate from '../templates/card-book.hbs';
import { BooksAPI } from './modules/BooksApiV2';

// ================
const refs = {
  createFormElem: document.querySelector('.js-create-form'),
  updateFormElem: document.querySelector('.js-update-form'),
  resetFormElem: document.querySelector('.js-reset-form'),
  deleteFormElem: document.querySelector('.js-delete-form'),
  bookListElem: document.querySelector('.js-articl-list'),
  btnLoad: document.querySelector('.js-btn-load'),
};

let listBooks = [];

// ============== LISTENERS ============ //
refs.btnLoad.addEventListener('click', onBtnLoad);
refs.createFormElem.addEventListener('submit', onCreateBook);
refs.resetFormElem.addEventListener('submit', onResetBook);
refs.updateFormElem.addEventListener('submit', onUpdateBook);
refs.deleteFormElem.addEventListener('submit', onDeleteBook);

// ========== CALLBACKS =============//
async function onCreateBook(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newBook = {};

  for (let [key, value] of formData.entries()) {
    key = key.replace('book', '').toLowerCase();
    newBook[key] = value;
  }

  try {
    const response = await BooksAPI.createBook(newBook);
    listBooks.push(response.data);
    refs.bookListElem.insertAdjacentHTML(
      'beforeend',
      bookTemplate(response.data),
    );
  } catch (err) {
    console.log(err);
  }

  e.target.reset();
}
async function onResetBook(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newBook = {};

  for (let [key, value] of formData.entries()) {
    key = key.replace('book', '').toLowerCase();
    newBook[key] = value;
  }

  try {
    await BooksAPI.resetBook(newBook);
    const index = listBooks.findIndex(book => +book.id === +newBook.id);
    listBooks[index] = newBook;
    const oldLiElem = refs.bookListElem.querySelector(
      `[data-id='${newBook.id}']`,
    );
    oldLiElem.insertAdjacentHTML('beforebegin', bookTemplate(newBook));
    oldLiElem.remove();
  } catch (error) {
    console.log(error);
  }

  e.target.reset();
}
async function onUpdateBook(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newBook = {};

  for (let [key, value] of formData.entries()) {
    key = key.replace('book', '').toLowerCase();
    value = value.trim();
    if (value) newBook[key] = value;
  }

  try {
    await BooksAPI.updateBook(newBook);

    const index = listBooks.findIndex(book => +book.id === +newBook.id);
    listBooks[index] = { ...listBooks[index], ...newBook };

    const oldLiElem = refs.bookListElem.querySelector(
      `[data-id='${newBook.id}']`,
    );
    oldLiElem.insertAdjacentHTML(
      'beforebegin',
      bookTemplate({ ...listBooks[index], ...newBook }),
    );
    oldLiElem.remove();
  } catch (error) {
    console.log(error);
  }

  e.target.reset();
}
async function onDeleteBook(e) {
  e.preventDefault();
  const id = e.target.elements.bookId.value;
  try {
    await BooksAPI.deleteBook(id);

    listBooks = listBooks.filter(book => +book.id !== +id);

    const bookElem = refs.bookListElem.querySelector(`[data-id="${id}"]`);
    bookElem.remove();
  } catch (error) {
    console.log(error);
  }

  e.target.reset();
}

function onBtnLoad(e) {
  loadBooks();
}

// ================== HELPERS =============== //
function renderBooks(books) {
  const markup = booksTemplate(books);
  refs.bookListElem.innerHTML = markup;
}

async function loadBooks() {
  const response = await BooksAPI.getBooks();
  listBooks = response.data;
  renderBooks(listBooks);
}
