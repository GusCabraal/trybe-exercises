// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

let word = 'araraa'
let newWord = '';

function verificaPalindrome(palavra) {
    let isPalindrome = false;
    newWord = word.split('').reverse().join('')
    if (word === newWord) {
        isPalindrome = true;
    }
    return isPalindrome;
}

verificaPalindrome(word)