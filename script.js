/*
 * Crea un array vuoto e chiedi all’utente un numero
 * da inserire nell’array. Continua a chiedere i numeri
 * all’utente e a inserirli nell’array fino a quando
 * a somma degli elementi è minore di 50.
 */

for (let i = 0; i < 50; i++) {
  const askNumber = prompt("Inserisci un numero");
  let sum = 0;
  const array = [{}, {}, {}];
  array.forEach(myFunction);

  function myFunction(item) {
    sum += item;
  }

  console.log(sum);
}
