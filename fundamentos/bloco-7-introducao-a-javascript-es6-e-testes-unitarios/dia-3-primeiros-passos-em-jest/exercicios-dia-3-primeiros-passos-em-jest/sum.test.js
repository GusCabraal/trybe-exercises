const sum = require("./sum");

describe('Exercicio 1 - some dois valores', () => {
  it('1- teste se 4 mais 5 é igual a 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });

  it('2- teste se 0 mais 0 é igual a 0', () => {
    expect(sum(0, 0)).toEqual(0);
  })
  it('3- teste se a função sum lança um erro quando os parâmetros são 4 e "5"', () => {
    expect(() => { sum(4, '5')}).toThrow(); 
  })
  it('4- Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => { sum(4, '5')}).toThrowError(new Error('parameters must be numbers')); 
  })
});
