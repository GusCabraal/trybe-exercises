const butao = document.getElementById('botao-contagem');
const texto = document.getElementById('text');
let clickCount = 0;
butao.addEventListener('click', () => {
    texto.innerText = `Contagem : ${clickCount += 1}`;
})