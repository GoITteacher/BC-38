import { Pokemon } from './modules/pokemonAPI';
import pokemonsTemplate from '../templates/pokemon-card.hbs';
const refs = {
  container: document.querySelector('.js-container'),
};

Pokemon.getPokemons().then(data => {
  renderPokemons(data);
});

function renderPokemons(pokemons) {
  const markup = pokemonsTemplate(pokemons);
  refs.container.innerHTML += markup;
}

window.addEventListener('scroll', function myFun(e) {
  const elem = e.target.documentElement;
  const height = elem.scrollHeight - elem.clientHeight - elem.scrollTop;
  if (height < 20) {
    window.removeEventListener('scroll', myFun);
    Pokemon.getPokemons().then(data => {
      renderPokemons(data);
      this.window.addEventListener('scroll', myFun);
    });
  }
});
