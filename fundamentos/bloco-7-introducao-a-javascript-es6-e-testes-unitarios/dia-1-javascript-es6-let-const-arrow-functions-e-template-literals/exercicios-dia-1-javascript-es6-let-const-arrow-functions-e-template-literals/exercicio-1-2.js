const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const compararNumeros = (a, b) => a - b;
const ordenarNumeros = (numeros) => numeros.sort(compararNumeros);


// console.log(oddsAndEvens); // será necessário alterar essa linha 😉
console.log(`Os numeros ${ordenarNumeros(oddsAndEvens)} se encontram ordenados de forma crescente!`);
