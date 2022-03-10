// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

let n = 10;
let factorial =1;

for (let index = n; index > 1; index -=1 ) {
    factorial *= index;
}

console.log(factorial)