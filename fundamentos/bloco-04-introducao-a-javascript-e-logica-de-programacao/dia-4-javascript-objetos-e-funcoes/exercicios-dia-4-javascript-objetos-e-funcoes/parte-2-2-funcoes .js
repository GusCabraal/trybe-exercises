// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function higherLength(test) {
    let result = test[0]
    for (let i = 0; i < test.length; i += 1) {
        if (test[i] > result) {
            result = test[i];
        }
    }
    return test.indexOf(result)

}

console.log(higherLength([2, 3, 6, 7, 10, 1]));



// apos ver o gabarito
// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function higherLength(numbers) {
    let indiceMaior = 0;
    for (let indice in numbers) {
        if (numbers[indice] > numbers[indiceMaior]) {
            indiceMaior = indice;
        }
    }
    return indiceMaior;
}
console.log(higherLength([2, 3, 6, 7, 10, 1]));
// //                        0, 1, 2, 3, 4,  5,