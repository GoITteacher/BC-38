import { NewsAPI } from './modules/newsApiV2';

const refs = {
  formElem: document.querySelector('.js-search-form'),
  articlesListElem: document.querySelector('.js-article-list'),
  //   btnLoad: document.querySelector('.js-btn-load'),
  //   paginationElem: document.querySelector('.js-pagination'),
};

refs.formElem.addEventListener('submit', e => {
  e.preventDefault();
  const query = e.target.elements.query.value;

  NewsAPI.getNews(query).then(data => {
    NewsAPI.totalPages = data.total_pages;
    refs.articlesListElem.innerHTML = '';
    renderArticles(data.articles);
    // if (data.total_pages > 1) {
    //   refs.btnLoad.disabled = false;
    // }
  });
});

let temp = false;
refs.articlesListElem.addEventListener('scroll', e => {
  console.dir(e.target);
  const heigth =
    e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop;
  if (heigth < 300 && !temp) {
    temp = true;
    NewsAPI.getNews().then(data => {
      renderArticles(data.articles);
      temp = false;
    });
  }
});

// refs.btnLoad.addEventListener('click', () => {
//   NewsAPI.getNews().then(data => {
//     renderArticles(data.articles);
//     if (data.total_pages > 1 && data.page !== data.total_pages) {
//       refs.btnLoad.disabled = false;
//     } else {
//       refs.btnLoad.disabled = true;
//     }
//   });
// });

// refs.paginationElem.addEventListener('click', e => {
//   if (e.target.nodeName !== 'BUTTON') return;

//   const currentPage = e.target.textContent;
//   NewsAPI.currentPage = +currentPage - 1;
//   NewsAPI.getNews().then(data => {
//     refs.articlesListElem.innerHTML = '';
//     renderArticles(data.articles);
//   });
// });

// ======================================
function renderArticles(articles) {
  const markup = articles
    .map((article, index, array) => {
      return `
      <li>
      <h3>${article.title}</h3>
      <p>${article.summary}</p>
      <p>${article.author}</p>
      </li>
      `;
    })
    .join('');

  refs.articlesListElem.insertAdjacentHTML('beforeend', markup);
}
