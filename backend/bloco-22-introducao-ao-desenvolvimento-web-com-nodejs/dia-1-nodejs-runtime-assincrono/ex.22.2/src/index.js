const fs = require('fs');

const nomeDoArquivo = './src/simpsons.json';

let personagens; 

try {
  const data = fs.readFileSync(nomeDoArquivo, 'utf8');
  personagens = JSON.parse(data);
} catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.path}`);
    console.log(err);
}


personagens.forEach(({id, name}) => console.log(id," - ", name));

