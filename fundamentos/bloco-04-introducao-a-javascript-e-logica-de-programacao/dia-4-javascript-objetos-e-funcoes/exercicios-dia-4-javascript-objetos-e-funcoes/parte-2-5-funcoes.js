//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
function verificaMaisRepetido(numbers) {
    let repetido = 2;
    let maisRepetido = 0;

    for (let index = 0; index < numbers.length; index += 1) {
        let contagemRepetido = 0;
        for (let j = 0; j < numbers.length; j += 1) {
            if (numbers[index] === numbers[j]) {
                contagemRepetido += 1;
            }
        }
        if (contagemRepetido > maisRepetido) {
            maisRepetido = index;
        }
    }
    return numbers[maisRepetido]
}

console.log(verificaMaisRepetido([2, 3, 2, 5, 8, 2, 3]))


// APOS VER O GABARITO
//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
function verificaMaisRepetido(numbers) {
    let repetido = 2;
    let indexMaisRepetido = 0;

    for (let index in numbers) {
        let contagemRepetido = 0;
        for (let index2 in numbers) {
            if (numbers[index] === numbers[index2]) {
                contagemRepetido += 1;
            }
        }
        if (contagemRepetido > indexMaisRepetido) {
            indexMaisRepetido = index;
        }
    }
    return numbers[indexMaisRepetido]
}

console.log(verificaMaisRepetido([2, 3, 2, 5, 8, 2, 3]))