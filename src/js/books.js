import '../css/common.css';
import booksTemplate from '../templates/card-books.hbs';
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

// ============== LISTENERS ============ //
refs.btnLoad.addEventListener('click', onBtnLoad);
refs.createFormElem.addEventListener('submit', onCreateBook);
refs.resetFormElem.addEventListener('submit', onResetBook);
refs.updateFormElem.addEventListener('submit', onUpdateBook);
refs.deleteFormElem.addEventListener('submit', onDeleteBook);
// ========== CALLBACKS =============//
function onCreateBook(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newBook = {};

  for (let [key, value] of formData.entries()) {
    key = key.replace('book', '').toLowerCase();
    newBook[key] = value;
  }

  BooksAPI.createBook(newBook).then(() => {
    loadBooks();
  });

  e.target.reset();
}
function onResetBook(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newBook = {};

  for (let [key, value] of formData.entries()) {
    key = key.replace('book', '').toLowerCase();
    newBook[key] = value;
  }
  console.log(newBook);
  BooksAPI.resetBook(newBook).then(() => {
    loadBooks();
  });
  e.target.reset();
}
function onUpdateBook(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newBook = {};

  for (let [key, value] of formData.entries()) {
    key = key.replace('book', '').toLowerCase();
    value = value.trim();
    if (value) newBook[key] = value;
  }
  console.log(newBook);
  BooksAPI.updateBook(newBook).then(() => {
    loadBooks();
  });
  e.target.reset();
}
function onDeleteBook(e) {
  e.preventDefault();
  const id = e.target.elements.bookId.value;
  BooksAPI.deleteBook(id).then(loadBooks);
  e.target.reset();
}
function onBtnLoad(e) {
  loadBooks();
}

// ================== HELPERS =============== //
function loadBooks() {
  BooksAPI.getBooks().then(({ data }) => {
    renderBooks(data);
  });
}
function renderBooks(books) {
  const markup = booksTemplate(books);
  refs.bookListElem.innerHTML = markup;
}
