document.querySelector("#header-container").style.backgroundColor = "green";
document.querySelector("#footer-container").style.backgroundColor = "blue";

let colorirEmergency =document.querySelectorAll(".emergency-tasks div");

let colorirNoEmergency =document.querySelectorAll(".no-emergency-tasks div");

let colorirEmergencyH3 =document.querySelectorAll(".emergency-tasks div h3");
let colorirNoEmergencyH3 =document.querySelectorAll(".no-emergency-tasks div h3");

for (i = 0; i < colorirEmergency.length; i += 1){
    colorirEmergency[i].style.backgroundColor = 'pink';
    colorirNoEmergency[i].style.backgroundColor = 'yellow';
    colorirEmergencyH3[i].style.backgroundColor = 'purple';
    colorirNoEmergencyH3[i].style.backgroundColor = 'black';

    
}
console.log(colorirEmergency.length)


