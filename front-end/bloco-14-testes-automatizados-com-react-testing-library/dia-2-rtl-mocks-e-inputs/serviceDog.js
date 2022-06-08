const API_URL ="https://dog.ceo/api/breeds/image/random";
const fetchDog = () => {
    return fetch(API_URL).then((response) => response.json()).then((data) => data.image);
} 
module.exports = { fetchDog };