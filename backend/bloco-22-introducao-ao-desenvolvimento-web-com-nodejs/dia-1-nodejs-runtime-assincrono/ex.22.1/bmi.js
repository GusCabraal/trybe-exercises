const readline = require('readline-sync');


const weigth = readline.questionFloat('What is your weight (kg)?');
const height = readline.questionFloat('What is your height? (cm)? ');
// const weigth = 80;
// const height = 1.7;

const bmi = Math.round(weigth / ((height * height)/10000), 2);
if(bmi < 18.5){
    console.log(bmi, " => Magreza");
} else if (bmi >= 18.5 && bmi < 24.9){
    console.log(bmi, " => Peso normal");
} else if (bmi >= 24.9 && bmi < 29.9){
    console.log(bmi, " => Sobrepeso");
} else if (bmi >= 29.9 && bmi < 34.9){
    console.log(bmi, " => Obesidade grau I");
} else if (bmi >= 34.9 && bmi < 39.9){
    console.log(bmi, " => Obesidade grau II");
} else {
    console.log(bmi, " => Obesidade graus III e IV");
}
