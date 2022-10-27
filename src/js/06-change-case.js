/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

/*  
function changeCase(string) {
}
console.log(changeCase('jAVAs CrIPT ')); 
*/

function changeCase(string) {
  const lower = string.toLowerCase();
  let result = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === string[i].toLowerCase()) {
      result += string[i].toUpperCase();
    } else {
      result += string[i].toLowerCase();
    }
  }
  return result;
}

// function changeCase(string) {
//   const lower = string.toLowerCase();
//   let result = '';
//   for (let i = 0; i < string.length; i += 1) {
//     if (string[i] === lower[i]) {
//       result += string[i].toUpperCase();
//     } else {
//       result += string[i].toLowerCase();
//     }
//   }
//   return result;
// }

console.log(changeCase('JavaScript'));
