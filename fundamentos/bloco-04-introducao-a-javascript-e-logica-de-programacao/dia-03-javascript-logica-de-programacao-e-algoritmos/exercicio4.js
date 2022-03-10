// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let primo;
let maior =0;

for (let i = 1; i <= 50; i += 1) {
    primo = 0;

    for (let j = 2; j <= i; j += 1) {
        if (i % j == 0) {
            primo += 1;
        }
    }
    if (primo === 1) {
    
        if (i > maior){
            maior = i;
        }

    }
}

console.log ("O maior numero primo entre 1 e 50 é ",maior)