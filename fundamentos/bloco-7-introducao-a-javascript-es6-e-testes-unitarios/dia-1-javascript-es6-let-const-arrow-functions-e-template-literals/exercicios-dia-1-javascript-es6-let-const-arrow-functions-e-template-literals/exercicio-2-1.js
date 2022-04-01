const fatorial = numero => {
    let mult = numero;
    for (let i = 2; i < numero; i += 1){
        mult *= i;
    }
    return mult;
}
console.log(fatorial(4));