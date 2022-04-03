const submitButton = document.getElementById("submit-button");
const cleanButton = document.getElementById("clean-button");

submitButton.addEventListener("click", semEnviar);

function semEnviar(event) {
  event.preventDefault();
}

cleanButton.addEventListener("click", apagarTudo);

function apagarTudo() {
  const pegaTudo = document.getElementsByTagName("input");
  const textArea = document.getElementsByTagName("textarea");
  for (let i = 0; i < pegaTudo.length; i += 1) {
    pegaTudo[i].value = "";
    pegaTudo[i].checked = false;
  }
  textArea.value = " ";
}

const agreement = document.getElementById("agree2");

agreement.addEventListener("change", habilitarBotao);
function habilitarBotao() {
  submitButton.disabled = !agreement.checked;
}

const textArea = document.getElementById("descricao");
const nameUsuario = document.getElementById("nome");
const emailUsuario = document.getElementById("e-mail");

function contaCaracteres() {
  let verifica = true;
  if (textArea.value.length > 500) {
    verifica = false;
  } else if (nameUsuario.value.length > 50 || nameUsuario.value.length < 10) {
    verifica = false;
  } else if (emailUsuario.value.length > 40 || emailUsuario.value.length < 10) {
    verifica = false;
  } else {
    verifica = true;
  }
  return verifica;
}

function mensagemSubmit() {
  let contagem = contaCaracteres();
  if (contagem === false) {
    alert("Dados Inválidos");
  } else {
    alert(
      "Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip."
    );
  }
}
submitButton.addEventListener("click", mensagemSubmit);
