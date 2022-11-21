/**
 * - Показываем и скрываем добавляя/удаляя класс is-visible
 * - Скрываем через определённое время
 * - Скрываем при клике
 * - Не забываем чистить таймер
 */

const refs = {
  notification: document.querySelector('.js-alert'),
};
/*
 * Функции
 */
function showNotofocation() {
  refs.notification.classList.add('is-visible');

  let idTimeout = setTimeout(() => {
    hideNotification();
    console.log('Hide');
  }, 5000);

  function hideNotification() {
    refs.notification.classList.remove('is-visible');
    refs.notification.removeEventListener('click', callback);
  }

  function callback() {
    hideNotification();
    clearTimeout(idTimeout);
  }

  refs.notification.addEventListener('click', callback);
}

setTimeout(showNotofocation, 3000);
