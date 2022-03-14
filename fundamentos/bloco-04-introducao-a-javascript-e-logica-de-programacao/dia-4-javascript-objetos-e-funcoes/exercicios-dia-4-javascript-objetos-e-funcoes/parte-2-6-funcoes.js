// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function verificaSoma(N) {

    let sum = 0;

    for (let index = 1; index <= N; index += 1) {
        sum += index;
    }
    return sum;
}

console.log(verificaSoma(5))
