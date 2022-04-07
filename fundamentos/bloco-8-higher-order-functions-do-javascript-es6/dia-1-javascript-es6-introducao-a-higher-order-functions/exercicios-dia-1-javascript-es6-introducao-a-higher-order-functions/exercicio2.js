const generateRamdomNumber = () => {
  return Math.round(Math.random() * 5);
};

const sorteio = (entrada, sorteado) => {
    console.log(sorteado)
    if (entrada === sorteado) {
        return 'Parabéns você ganhou';
    }
    return 'Tente novamente.'

}

console.log(sorteio(5, generateRamdomNumber()));