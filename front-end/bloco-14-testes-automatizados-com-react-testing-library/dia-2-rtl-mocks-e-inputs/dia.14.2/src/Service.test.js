const service = require("./Service");
jest.mock("./Service");

describe("Primeiro exercicio", () => {
    // test("1- Testa se a função é chamada", () => {
//     service.randomNumberGenerator = jest.fn().mockReturnValue(10);

//     expect(service.randomNumberGenerator()).toBe(10);
//     expect(service.randomNumberGenerator).toHaveBeenCalled();
//     expect(service.randomNumberGenerator).toHaveBeenCalledTimes(1);
//   });

  test("2- Criar uma nova implementação", () => {
    service.randomNumberGenerator.mockImplementation((n1, n2) => n1 / n2 );
    service.randomNumberGenerator( 4, 2);

    expect(service.randomNumberGenerator).toHaveBeenCalled();
    expect(service.randomNumberGenerator).toHaveBeenCalledTimes(1);
    expect(service.randomNumberGenerator).toHaveBeenCalledWith(4, 2);
    expect(service.randomNumberGenerator(4, 2)).toBe(2);

  });
});
