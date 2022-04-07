const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const correcao = (gabarito, prova) => {
    let notaFinal = 0;
    for (let i = 0; i < gabarito.length; i++){
        if (prova[i] === gabarito[i]){
            notaFinal += 1;
        } else if (prova[i] === 'N.A'){

        } else {
            notaFinal -= 0.5;
        }
    }
    return notaFinal;
}

correcao(RIGHT_ANSWERS, STUDENT_ANSWERS)

const imprimeNotaFinal = (gab, prova, corrigir) => {
    return corrigir(gab, prova);
}

console.log(`A nota final do estudante foi ${imprimeNotaFinal(RIGHT_ANSWERS, STUDENT_ANSWERS, correcao)}`);
