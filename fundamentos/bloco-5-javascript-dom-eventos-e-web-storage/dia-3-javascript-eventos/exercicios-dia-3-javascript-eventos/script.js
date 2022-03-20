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
// function addDAys() {
let elementUl = document.getElementById('days');
for (let index = 0; index < dezDaysList.length; index += 1) {

    let elementLi = document.createElement('li');
    let element = dezDaysList[index];

    elementLi.innerText = element;
    elementUl.appendChild(elementLi);
    if (element == 24 || element == 31) {
        elementLi.className = 'day holiday';

    } else if (element == 4 || element == 11 || element == 18) {
        elementLi.className = 'day friday';
    } else if (element == 25) {
        elementLi.className = 'day friday holiday'
    } else {
        elementLi.className = 'day';
    }
}

// }
// addDAys();

// Exercicio 2:
// function addButton(feriados){
let divPai = document.querySelector('.buttons-container');
let btn = document.createElement('button');
btn.id = 'btn-holiday';
divPai.appendChild(btn);
btn.innerText = 'Feriados';
// }
// addButton('Feriados')

// Exercicio 3:

btn.addEventListener('click', changeColorHoliday);

function changeColorHoliday() {
    let liHolidays = document.getElementsByClassName('holiday');
    for (let i = 0; i < liHolidays.length; i += 1) {
        if (liHolidays[i].style.background !== 'red') {
            liHolidays[i].style.background = 'red';
        } else {
            liHolidays[i].style.background = 'rgb(238,238,238)';
        }
    }
}

// Exercício 4:

let btnFriday = document.createElement('button');
divPai.appendChild(btnFriday);
let friday = 'Sexta-feira';
btnFriday.innerText = friday;
btnFriday.id = 'btn-friday';

// Exercício 5: