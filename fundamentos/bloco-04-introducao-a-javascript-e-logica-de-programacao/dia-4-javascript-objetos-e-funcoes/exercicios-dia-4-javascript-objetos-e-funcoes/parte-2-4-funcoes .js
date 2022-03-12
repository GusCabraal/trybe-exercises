//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function largerName(test) {
    let position;
    let result = test[0].length
    for (let i = 0; i < test.length; i += 1) {
        if (test[i].length > result) {
            result = test[i].length;
            position = i;
        }
    }
    return names[position];

}

console.log(largerName(names))