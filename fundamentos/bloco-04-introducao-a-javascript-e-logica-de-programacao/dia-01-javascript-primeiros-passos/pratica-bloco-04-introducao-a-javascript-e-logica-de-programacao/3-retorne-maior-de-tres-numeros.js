const num1 = 15;
const num2 = 19;
const num3 = 18;

if (num1 > num2 && num1 > num3) {
    console.log (num1+" é maior que "+num2+ " e "+num3)
} 
else if (num2 > num1 && num2 > num3) {
    console.log (num2+" é maior que "+num1+ " e "+num3)
}
else if (num3 > num1 && num3 > num2) {
    console.log (num3+" é maior que "+num1+ " e "+num2)
}
else {
    console.log("Condição não atendida.")
}