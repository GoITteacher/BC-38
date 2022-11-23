import { searchHero } from './modules/jsonplaceholder';
import heroMarkup from '../templates/hero-card.hbs';
const refs = {
  formElem: document.querySelector('.js-search-form'),
  containerElem: document.querySelector('.js-card-container'),
};

refs.formElem.addEventListener('submit', e => {
  e.preventDefault();
  const hero = e.target.elements.query.value;

  searchHero(hero).then(value => {
    refs.containerElem.innerHTML = heroMarkup(value);
  });
});
