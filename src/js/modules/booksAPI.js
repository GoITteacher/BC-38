const BASE_URL = 'http://localhost:3000';
export class BooksAPI {
  static getBooks() {
    return fetch(`${BASE_URL}/books`).then(res => res.json());
  }

  static async createBook(book) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    };

    try {
      const res = await fetch(`${BASE_URL}/books`, options);
      return res.json();
    } catch {
      console.log('Error');
      return 'Error';
    }
  }

  static async updateBook(book) {
    const { id } = book;
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    };
    try {
      const res = await fetch(`${BASE_URL}/books/${id}`, options);

      if (!res.ok) throw new Error('Error');

      return res.json();
    } catch {
      console.log('Error');
    }
  }

  static async resetBook(book, name, id, login) {
    const { id } = book;
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    };

    const res = await fetch(`${BASE_URL}/books/${id}`, options);
    return res.json();
  }

  static deleteBook(id) {
    return fetch(`${BASE_URL}/books/${id}`, { method: 'DELETE' });
  }
}
