// const newEmployees = () => {
//     const employees = {
//       id1: 'Pedro Guerra', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: 'Luiza Drumond', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: 'Carla Paiva', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
//   };

//   const emailUsuario = (nomes) => {
//       return Object.values(nomes).map((name) => ({nome: name, email: `${name.split(' ').join('_').toLowerCase()}@betrybe.com`}));
// }


const newEmployees = () => {
    const employees = {
      id1: emailUsuario('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: emailUsuario('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: emailUsuario('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  const emailUsuario = (nome) => {
      return { nome, email: `${nome.split(' ').join('_').toLowerCase()}@betrybe.com`};
}

console.log(newEmployees())


const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(idi) {
    // Adicione seu código aqui
    return musicas.find(({id})=> id === idi)
  }
  
  console.log(findMusic('31031685'))

