const butao = document.getElementById('botao-contagem');
const texto = document.getElementById('text');
let clickCount = 0;
butao.addEventListener('click', contagem = () => {
    clickCount += 1;
    texto.innerText = `Contagem : ${clickCount}`;
})