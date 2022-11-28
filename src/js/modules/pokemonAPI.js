export class Pokemon {
  static next = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10';
  static getPokemons() {
    if (!Pokemon.next) return Promise.resolve({});

    return fetch(Pokemon.next)
      .then(response => response.json())
      .then(data => {
        Pokemon.next = data.next;
        const array = data.results.map(pokemon => {
          return fetch(pokemon.url).then(response => response.json());
        });

        return Promise.all(array);
      });
  }

  static getPokemon(id) {
    return fetch(`https://pokeapi.co/api/v2/ability/${id}/`).then(response =>
      response.json(),
    );
  }
}
