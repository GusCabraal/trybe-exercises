//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function smallestLength(test) {
    let result = test[0]
    for (let i = 0; i < test.length; i += 1) {
        if (test[i] < result) {
            result = test[i];
        }
    }
    return test.indexOf(result)

}

console.log(smallestLength([2, 4, 6, 7, 10, 0, -3]))


// apos ver o gabarito

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function smallestLength(numbers) {
    let indiceMenor = 0;
    for (let indice in numbers){
        if (numbers[indice] < numbers[indiceMenor]){
            indiceMenor = indice;
        }
    }
    return indiceMenor;
}

console.log(smallestLength([2, 4, 6, 7, 10, 0, -3]))
