import { Countries } from './modules/countriesAPI';
import countryTemplate from '../templates/country.hbs';

const refs = {
  form: document.querySelector('.js-form'),
  resContainer: document.querySelector('.js-container'),
};

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const findCountry = e.target.elements['country-name'].value;
  Countries.findCountries(findCountry).then(value => {
    renderCountries(value);
  });
});

function renderCountries(arrCountries) {
  if (arrCountries.length === 1) {
    const country = arrCountries[0];
    console.log(country.languages);
    const markup = countryTemplate(country);

    refs.resContainer.innerHTML = markup;
  }
}
