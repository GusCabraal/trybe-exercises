// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

function append(data) {
    const h2 = document.getElementById('jokeContainer')
    h2.innerText = data;
  }

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data =>  append(data.joke))
};

window.onload = () => fetchJoke();
