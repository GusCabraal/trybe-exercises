const service = require("./service.js");
jest.mock("./service.js");


describe("Testa uma função que gera um número aleatório", () => {
  test("Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.", () => {
    service.randomNumber = jest.fn().mockReturnValue(10);
    service.randomNumber();
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber()).toBe(10)
  });
  test("crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo.", () => {
    service.randomNumber = jest.fn()
    .mockImplementationOnce((a, b) => a/b)
    expect(service.randomNumber(4,2)).toBe(2)
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber()).not.toBe(101);
    expect(service.randomNumber).toHaveBeenCalledTimes(2);
  });

  test("Utilize o mock e desenvolva uma nova implementação que receba três parâmetros", () => {
    service.randomNumber = jest.fn()
    .mockImplementation((a, b, c) => a * b * c)
    
    expect(service.randomNumber(4,2, 5)).toBe(40)
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(4,2,5);
    
    service.randomNumber = jest.fn()
    .mockImplementation((a) => a * 2)
    
    expect(service.randomNumber(5)).toBe(10);
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(5);
  });
});
