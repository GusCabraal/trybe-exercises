// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0){
        result += 1;
    }
}

if (result > 0){
    console.log("existem", result, "numeros impares no array numbers.");
} else {
    console.log ("nenhum valor impar encontrado")
}
