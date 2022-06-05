const service = require("./service.js");
jest.mock("./service.js");


describe("Testa uma função que gera um número aleatório", () => {
  test("Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.", () => {
    service.randomNumber = jest.fn().mockReturnValue(10);
    service.randomNumber();
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber()).toBe(10)
  });
});
