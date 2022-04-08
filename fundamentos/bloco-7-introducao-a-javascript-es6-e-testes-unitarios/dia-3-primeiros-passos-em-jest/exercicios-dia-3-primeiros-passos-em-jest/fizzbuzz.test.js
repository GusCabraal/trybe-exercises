const myFizzBuzz = require('./fizzbuzz');

describe('A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número', () => {
    // Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
    test('1. Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
      expect(myFizzBuzz(15)).toEqual('fizzbuzz');
    })
    // Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
    test('2. Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
      expect(myFizzBuzz(9)).toEqual('fizz');
    })
    // Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
    test('3. Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
      expect(myFizzBuzz(10)).toEqual('buzz');
    })
    // Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
    test('4. Faça uma chamada com um número que não é divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
      expect(myFizzBuzz(14)).toEqual(14);
    })
    // Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
    test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
      expect(myFizzBuzz('15')).toBeFalsy();
    })
});