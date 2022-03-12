//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let numbers = [2, 4, 6, 7, 10, 0, -3];

function smallestLength(test) {
    let result = test[0]
    for (let i = 0; i < test.length; i += 1) {
        if (test[i] < result) {
            result = test[i];
        }
    }
    return numbers.indexOf(result)

}

smallestLength(numbers)