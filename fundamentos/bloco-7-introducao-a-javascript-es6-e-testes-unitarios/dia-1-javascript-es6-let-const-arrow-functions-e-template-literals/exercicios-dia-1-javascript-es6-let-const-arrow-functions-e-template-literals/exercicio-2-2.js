const longestWord = phrase => {
    const words = phrase.split(' ');
    let maiorPalavra = words[0];
    for (let i = 0; i < words.length; i += 1 ){
    words[i].length > maiorPalavra.length ? maiorPalavra = words[i]: false;
    } 
    return maiorPalavra;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')); // retorna 'aconteceu'