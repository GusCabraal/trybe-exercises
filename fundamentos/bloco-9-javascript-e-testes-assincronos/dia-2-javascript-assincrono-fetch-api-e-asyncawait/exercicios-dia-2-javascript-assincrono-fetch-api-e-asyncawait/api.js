const fetchCoins =  async () => {
    const url = 'https://api.coincap.io/v2/assets';

    const coins = await fetch(url)
    .then(response => response.json())
    .then(data =>  data.data)
    .catch((error) => error.tostring());
    // console.log(coins);
    return coins;
};

const append = async () => {
    const coins = await fetchCoins();
    const top10 = coins.filter(({ rank }) => rank <= 10);
    const listItems = top10.map(({name, symbol, priceUsd}) => `${name} (${symbol}): ${Number(priceUsd).toFixed(2)}`);
    const ul = document.getElementById('criptoContainer');
    listItems.forEach((list, index) => {
        const li = document.createElement('li');
        li.innerText = list;
        ul.appendChild(li);
    })
}

window.onload = () => append();