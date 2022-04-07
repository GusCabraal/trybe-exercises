const newEmployees = () => {
    const employees = {
      id1: dadosEmployees('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: dadosEmployees('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: dadosEmployees('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  const dadosEmployees = (nome) => {
    const emailFormatado = `${nome.replace(' ','_').toLowerCase()}@trybe.com`;  
    return {
          nomeCompleto: nome,
          email: emailFormatado
      }
  }

  console.log(newEmployees());