function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercicio 1:
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function createDaysOfMouth() {
    let days = document.getElementById('days');
    for (let index = 0; index < dezDaysList.length; index += 1) {
      
        let dayElement = dezDaysList[index];
        let day = document.createElement('li');  

        if (dayElement === 24 || dayElement === 31) {
            day.innerText = dayElement;
            days.appendChild(day);
            day.className = 'day holiday';
        } else if (dayElement === 4 || dayElement === 11 || dayElement === 18) {
            day.innerText = dayElement;
            days.appendChild(day);
            day.className = 'day friday';
        } else if (dayElement === 25) {
            day.innerText = dayElement;
            days.appendChild(day);
            day.className = 'day friday holiday'
        } else {
            day.innerText = dayElement;
            days.appendChild(day);
            day.className = 'day';
        }
    }

}
createDaysOfMouth();

// Exercicio 2:
function createHolidayButton(buttonName){
let buttonsContainer = document.querySelector('.buttons-container');
let btn = document.createElement('button');

btn.id = 'btn-holiday';
buttonsContainer.appendChild(btn);
btn.innerText = buttonName;
}
createHolidayButton('Feriados');

// Exercicio 3:

function changeColorHolidays() {
    let holidays = document.getElementsByClassName('holiday');
    let btn = document.getElementById('btn-holiday');
    btn.addEventListener('click', function (){

        for (let i = 0; i < holidays.length; i += 1) {
            if (holidays[i].style.background === 'red') {
                holidays[i].style.background = 'rgb(238,238,238)';
            } else {
                holidays[i].style.background = 'red';
            }
            // console.log(holidays[i]);
        }
    })
}

changeColorHolidays();

// Exercício 4:
function createFridayButton (buttonName){
let btnFriday = document.createElement('button');
btnFriday.innerText = buttonName;
btnFriday.id = 'btn-friday';

let buttonsContainer = document.querySelector('.buttons-container');
buttonsContainer.appendChild(btnFriday);
}

createFridayButton('Sexta-Feira');

// Exercício 5:
function displayFridays(elementSexta){
let btnFriday = document.getElementById('btn-friday');
btnFriday.addEventListener('click', function changeFriday() {
    let fridayDays = document.getElementsByClassName('friday');
    let friday = 'sexta-feira'
    for (let i = 0; i < fridayDays.length; i += 1) {
        if (fridayDays[i].innerText !== friday) {
            fridayDays[i].innerText = friday;
        } else {
            fridayDays[i].innerText = elementSexta[i];
        }
    }
})
}
let arrayFriday = [4,11,18,25];
displayFridays(arrayFriday);

// Exercicio 6:
function zoomIn (){
let days  = document.getElementById('days');
days.addEventListener('mouseover', function(event){
event.target.style.fontSize = '30px';
event.target.style.fontWeight = '600';    

})
}

function zoomOut (){
let days  = document.getElementById('days');
days.addEventListener('mouseout', function(event){
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';      
})
}
zoomIn();
zoomOut();

// Exercício 7:
function newTaskSpan (task){
let divMyTasks = document.querySelector('.my-tasks');
let myTasks = document.createElement('span');

myTasks.innerText = task;
divMyTasks.appendChild(myTasks);
}
newTaskSpan('Cozinhar');

// Exercício 8:
function newTaskColor(colorTask){
    
    let taskLegend = document.createElement('div');
    taskLegend.classList = 'task';
    taskLegend.style.background = colorTask;

    let myTasks = document.querySelector('.my-tasks');
    myTasks.appendChild(taskLegend);

}
newTaskColor('blue');
// newTaskColor('red');
// newTaskColor('orange');
// let elemento = newTaskColor('blue');

// // Exercício 9:
// newTaskColor('blue').addEventListener('click', function selecionarDiv(event){
//     let elemento = event.target;
//     if (elemento.className.includes('selected')){
//         elemento.className = 'task';
//         console.log('nao selecionado');
//     }else {
//         elemento.className = 'task selected';
//         console.log('selecionado')
//     }
//     return elemento;
// })

// selecionarDiv();
// let corSelecionada = querySelector('.task')

// elementUl.addEventListener('click', function(event){
//     event.target.style.background = corSelecionada.style.background;
// })

