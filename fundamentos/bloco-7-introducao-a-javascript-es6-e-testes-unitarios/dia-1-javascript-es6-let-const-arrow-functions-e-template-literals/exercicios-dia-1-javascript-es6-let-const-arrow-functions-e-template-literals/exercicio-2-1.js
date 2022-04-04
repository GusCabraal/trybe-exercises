const fatorial = numero => {
    let mult = numero;
    for (let i = 2; i < numero; i += 1){
        mult *= i;
    }
    return mult;
}
console.log(fatorial(4));

// forma recursiva
const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(4));