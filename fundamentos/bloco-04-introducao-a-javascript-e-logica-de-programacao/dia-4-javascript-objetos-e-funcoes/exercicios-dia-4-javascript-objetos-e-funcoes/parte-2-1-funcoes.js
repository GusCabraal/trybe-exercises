// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindrome(word) {
    let isPalindrome = false;
    let newWord = '';
    newWord = word.split('').reverse().join('')
    if (word === newWord) {
        isPalindrome = true;
    }
    return isPalindrome;
}

console.log(verificaPalindrome('arara'));