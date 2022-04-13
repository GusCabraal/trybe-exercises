// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maca', 'morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'acai', 'coco'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...specialFruit, ...additionalItens]
};

console.log(fruitSalad(specialFruit, additionalItens));