// Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
// Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica'.

let resultado = "reprovada"

switch (resultado) {
    case "aprovada":
        console.log("aprovada no processo seletivo")
        break
    case "lista":
        console.log("lista de espera do processo seletivo")
        break
    case "reprovada":
        console.log("reprovada no processo seletivo")
        break
    default:
        console.log("não se aplica")
}