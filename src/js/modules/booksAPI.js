const BASE_URL = 'http://localhost:3000';
export class BooksAPI {
  static getBooks() {
    return fetch(`${BASE_URL}/books`).then(res => res.json());
  }

  static createBook(book) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    };

    return fetch(`${BASE_URL}/books`, options).then(res => res.json());
  }

  static updateBook(book) {
    const { id } = book;
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    };

    return fetch(`${BASE_URL}/books/${id}`, options).then(res => res.json());
  }

  static resetBook(book) {
    const { id } = book;
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    };

    return fetch(`${BASE_URL}/books/${id}`, options).then(res => res.json());
  }

  static deleteBook(id) {
    return fetch(`${BASE_URL}/books/${id}`, { method: 'DELETE' });
  }
}
