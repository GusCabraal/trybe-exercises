const generateRamdomNumber = () => Math.round(Math.random() * 5);

const sorteio = (number, sorteado) => number === sorteado ? 'Parabéns você ganhou':'Tente novamente.';

console.log(sorteio(5, generateRamdomNumber()));