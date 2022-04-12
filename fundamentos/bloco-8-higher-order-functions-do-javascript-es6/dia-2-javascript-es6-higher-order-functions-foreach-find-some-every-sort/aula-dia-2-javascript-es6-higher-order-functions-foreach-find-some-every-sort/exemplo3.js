const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];
const maiusculo =[]
const convertToUpperCase = (name) => {
  maiusculo.push(name.toUpperCase());
};

names.forEach(convertToUpperCase);
console.log(maiusculo); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]
