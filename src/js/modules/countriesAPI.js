export class Countries {
  static findCountries(country) {
    return fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('not found');
        }
        return response.json();
      })
      .catch(() => {
        console.log('not found');
      });
  }
}
