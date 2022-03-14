//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function largerName(names) {
    let position;
    let result = names[0].length
    for (let i = 0; i < names.length; i += 1) {
        if (names[i].length > result) {
            result = names[i].length;
            position = i;
        }
    }
    return names[position];
}

console.log(largerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))


// APOS VER O GABARITO
//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function largerName(names) {
    let indiceMaior = 0;
    for (let indice in names){
        if(names[indice].length > names[indiceMaior].length){
            indiceMaior = indice;
        }
    }
    return names[indiceMaior];
}

console.log(largerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))