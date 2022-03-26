const submitButton = document.getElementById('submit-button');
const cleanButton = document.getElementById('clean-button');

submitButton.addEventListener('click', semEnviar);

function semEnviar(event){
    event.preventDefault();
}

cleanButton.addEventListener('click', apagarTudo)

function apagarTudo (){
    const pegaTudo = document.getElementsByTagName('input');
    const textArea = document.getElementsByTagName('textarea');
    for (let i = 0; i < pegaTudo.length; i += 1){
        pegaTudo[i].value = '';
        pegaTudo[i].checked = false;
    }
    textArea.value = ' ';
}