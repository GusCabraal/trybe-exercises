// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

let word = 'trybe'

function verificaPalindrome (palavra){
    for (let i =0; i < 5 ; i+= 1){
        console.log(palavra[i])
    }
}

verificaPalindrome(word)