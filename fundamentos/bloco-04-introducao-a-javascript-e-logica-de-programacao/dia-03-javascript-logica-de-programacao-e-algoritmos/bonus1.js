// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

let linha = '';
let n = 5;

for (let j = 0; j < n; j += 1) {
    linha += '*'
}

for (j = 0; j < n; j += 1){
    console.log(linha)

}