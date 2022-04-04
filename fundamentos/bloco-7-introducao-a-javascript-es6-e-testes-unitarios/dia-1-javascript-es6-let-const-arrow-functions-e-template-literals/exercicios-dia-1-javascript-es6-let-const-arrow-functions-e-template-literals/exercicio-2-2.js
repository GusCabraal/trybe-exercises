const longestWord = text => {
    const words = text.split(' ');
    let maiorPalavra = words[0];
    for (let i = 0; i < words.length; i += 1 ){
    words[i].length > maiorPalavra.length ? maiorPalavra = words[i]: false;
    } 
    return maiorPalavra;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')); // retorna 'aconteceu'

//forma recursiva 
const longestWord2 = text => text.split(' ').sort((wordA, wordB) => wordA.length - wordB.length)[text.split(' ').length -1];

console.log(longestWord2("Antonio foi no banheiro e não sabemos o que aconteceu"));