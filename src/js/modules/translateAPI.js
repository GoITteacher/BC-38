export class TranslateAPI {
  constructor() {
    this.BASE_URL =
      'https://translated-mymemory---translation-memory.p.rapidapi.com/api/get';
    this.Headers = {
      'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
      'X-RapidAPI-Host':
        'translated-mymemory---translation-memory.p.rapidapi.com',
    };
  }
  translate(translateText) {
    const options = {
      headers: this.Headers,
    };

    const params = new URLSearchParams({
      langpair: 'en|uk',
      q: translateText,
    });

    return fetch(`${this.BASE_URL}?${params}`, options)
      .then(response => response.json())
      .then(data => {
        return data.responseData;
      });
  }
}
