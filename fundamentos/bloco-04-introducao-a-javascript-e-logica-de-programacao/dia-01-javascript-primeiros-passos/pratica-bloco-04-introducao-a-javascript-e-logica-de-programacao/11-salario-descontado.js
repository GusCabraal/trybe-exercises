let salarioBruto = 3000;
let inss, impRenda,salarioBase,aliquotaInss, aliquotaImpRenda, salarioLiquido;

if (salarioBruto <= 1556.94) {
    inss = salarioBruto * 0.08;
} 
else if (salarioBruto <= 2594.92) {
    inss = salarioBruto * 0.09;
} 
else if (salarioBruto <= 5189.82) {
    inss = salarioBruto * 0.11;
}
else {
    inss = 570.88;
}

salarioBase = salarioBruto - inss;

if (salarioBase <= 1903.98) {
    impRenda = 0;
} 
else if (salarioBase <= 2826.65) {
    impRenda = salarioBase * 0.075 - 142.8;
} 
else if (salarioBase <= 3751.05) {
    impRenda = salarioBase * 0.15 - 354.8;
} 
else if (salarioBase <= 4664.68) {
    impRenda = salarioBase * 0.225 - 636.13;
} else {
    impRenda = salarioBase * 0.275 - 869.36;
}

salarioLiquido = salarioBase - impRenda;

console.log("O salario bruto é de R$ "+ salarioBruto)
console.log("A aliquota INSS é de R$ "+ inss)
console.log("O salário base é de R$ "+ salarioBase)
console.log("O imposto de renda é de R$ "+ impRenda)
console.log("o salario liquido é de R$ "+salarioLiquido)
