
// Recuperando a classe header-container
let recuperandoIdHeaderContainer = document.querySelector("#header-container");
recuperandoIdHeaderContainer.style.backgroundColor = "rgb(76,164,109)";

// Recuperando o id footer-container
let recuperandoIdFooterContainer = document.querySelector("#footer-container");
recuperandoIdFooterContainer.style.backgroundColor = "rgb(0, 53, 51)";

// Recuperando as emergency
let colorirEmergency =document.querySelectorAll(".emergency-tasks div");
let colorirNoEmergency =document.querySelectorAll(".no-emergency-tasks div");

// Recuperando os subtitles
let colorirEmergencyH3 =document.querySelectorAll(".emergency-tasks div h3");
let colorirNoEmergencyH3 =document.querySelectorAll(".no-emergency-tasks div h3");

// atribuindo o backgroundColor para os elementos
for (i = 0; i < colorirEmergency.length; i += 1){
    colorirEmergency[i].style.backgroundColor = 'rgb(255, 159, 132)';
    colorirNoEmergency[i].style.backgroundColor = 'rgb(249, 219, 94)';
    colorirEmergency[i].style.paddingTop = '5px';
    colorirNoEmergency[i].style.paddingTop = '5px';

    colorirEmergencyH3[i].style.backgroundColor = 'rgb(165, 0, 243)';
    colorirNoEmergencyH3[i].style.backgroundColor = 'rgb(35, 37, 37)'; 
}



