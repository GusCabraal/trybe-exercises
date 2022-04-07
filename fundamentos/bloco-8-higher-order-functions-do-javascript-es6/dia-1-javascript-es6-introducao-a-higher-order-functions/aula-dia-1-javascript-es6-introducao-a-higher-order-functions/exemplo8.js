// Ao chamar a função doingThings:
const doingThings = (frase) => {
    console.log(frase());
}

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

const acordando = () => 'Acordando!!';
const coffee = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

doingThings(acordando);
doingThings(coffee);
doingThings(sleep);