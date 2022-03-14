// 7 - Crie uma função que receba uma string word e outra string ending . 
// Verifique se a string ending é o final da string word. 
// Considere que a string ending sempre será menor que a string word.

function verificaEnding(word,ending){

let splitWord = word.split('');
let splitEnding = ending.split('');
let result = false;

for (let i = 1; i <= splitEnding.length ; i += 1){
    if (splitEnding[splitEnding.length-i] === splitWord[splitWord.length-i]){
        result = true;
    }
}
return result;
}

console.log(verificaEnding('trybe','be'))

