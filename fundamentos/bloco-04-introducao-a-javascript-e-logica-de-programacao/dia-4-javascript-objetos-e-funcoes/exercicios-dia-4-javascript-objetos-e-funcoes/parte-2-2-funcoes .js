// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let numbers = [2, 3, 6, 7, 10, 1]

function higherLength(test) {
    let result = test[0]
    for (let i = 0; i < test.length; i += 1) {
        if (test[i] > result) {
            result = test[i];
        }
    }
    return numbers.indexOf(result)

}

higherLength(numbers)