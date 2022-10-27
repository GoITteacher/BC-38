/*
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */

const logins = ['m4ngoDoge', 'avocod3r', 'poly1scute', 'aj4xth3m4n'];
const logins1 = [];

const findLogin = function (allLogins, loginToFind) {
  for (let i = 0; i < allLogins.length; i += 1) {
    if (allLogins[i] === loginToFind) {
      return `Пользователь ${loginToFind} найден.`;
    }
  }

  return `Пользователь ${loginToFind} не найден.`;
};

console.log(findLogin(logins, 'm4ngoDoge'));
findLogin(logins1, 'k1widab3st');
findLogin(logins1, 'jam4l');
findLogin(logins1, 'poly1scute');
