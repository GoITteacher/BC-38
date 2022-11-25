import axios from 'axios';

const axios2 = axios.create({
  baseURL: 'https://free-news.p.rapidapi.com/v1',
  headers: {
    'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
    'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
  },
});

const BASE_URL = 'https://free-news.p.rapidapi.com/v1';
const END_POINT = '/search';

export class NewsAPI {
  static totalPages = 1;
  static currentPage = 1;
  static query = '';

  static getNews(query) {
    if (query !== undefined) {
      NewsAPI.query = query;
      NewsAPI.currentPage = 1;
    } else {
      NewsAPI.currentPage += 1;
    }

    const options = {
      headers: {
        'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
        'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
      },
    };

    const PARAMS = new URLSearchParams({
      q: NewsAPI.query,
      lang: 'en',
      page_size: 10,
      page: NewsAPI.currentPage,
    });

    return fetch(`${BASE_URL}${END_POINT}?${PARAMS}`, options).then(res =>
      res.json(),
    );
  }

  static getNewsV2(query) {
    return axios2.get(END_POINT, {
      params: {
        q: query,
      },
    });
  }
}
