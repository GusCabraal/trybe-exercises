const service = require("./Service");
jest.mock("./Service");

describe("Primeiro exercicio", () => {
    // test("1- Testa se a função é chamada", () => {
//     service.randomNumberGenerator = jest.fn().mockReturnValue(10);

//     expect(service.randomNumberGenerator()).toBe(10);
//     expect(service.randomNumberGenerator).toHaveBeenCalled();
//     expect(service.randomNumberGenerator).toHaveBeenCalledTimes(1);
//   });

//   test("2- Criar uma nova implementação", () => {
//     service.randomNumberGenerator.mockImplementation((n1, n2) => n1 / n2 );
//     service.randomNumberGenerator( 4, 2);

//     expect(service.randomNumberGenerator).toHaveBeenCalled();
//     expect(service.randomNumberGenerator).toHaveBeenCalledTimes(1);
//     expect(service.randomNumberGenerator).toHaveBeenCalledWith(4, 2);
//     expect(service.randomNumberGenerator(4, 2)).toBe(2);

//   });

  test("3- Criar mais uma nova implementação", () => {
    service.randomNumberGenerator.mockImplementation((a, b, c) => a * b * c );
    service.randomNumberGenerator( 4, 2, 3);

    expect(service.randomNumberGenerator).toHaveBeenCalled();
    expect(service.randomNumberGenerator).toHaveBeenCalledTimes(1);
    expect(service.randomNumberGenerator).toHaveBeenCalledWith(4, 2, 3);
    expect(service.randomNumberGenerator(4, 2, 3)).toBe(24);

    service.randomNumberGenerator.mockClear()

    service.randomNumberGenerator.mockImplementation((a) => a * 2 );
    service.randomNumberGenerator( 4);

    expect(service.randomNumberGenerator).toHaveBeenCalled();
    expect(service.randomNumberGenerator).toHaveBeenCalledTimes(1);
    expect(service.randomNumberGenerator).toHaveBeenCalledWith(4);
    expect(service.randomNumberGenerator(4)).toBe(8);

  });

});

describe("Requisito 1.4", () => {
test("Desenvolva uma nova implementação para a primeira função: agora ela deve retornar a string em caixa baixa", () => {
    const mockConvertToUpperCase = jest.spyOn(service, "convertToUpperCase").mockImplementation((a) => a.toLowerCase() );

    expect(mockConvertToUpperCase('QUINDIM')).toBe('quindim');
    expect(service.convertToUpperCase).toHaveBeenCalledTimes(1);
    expect(service.convertToUpperCase).toHaveBeenCalledWith('QUINDIM');

});

// test("Defina, para a segunda função, uma nova implementação: ela deve retornar a última letra de uma string", () => {
//     service.firstString.mockImplementation((palavra) => palavra[palavra.length - 1] );
//     service.firstString('Pipoca');

//     expect(service.firstString).toHaveBeenCalledTimes(1);
//     expect(service.firstString).toHaveBeenCalledWith('Pipoca');
//     expect(service.firstString('Pipoca')).toBe('a');
// });

// test("Implemente, na terceira função: ela deve receber três strings e concatená-las", () => {
//     service.concatStrings.mockImplementation((p1, p2, p3) => `${p1}${p2}${p3}`);
//     service.concatStrings('papai','noel','canino');

//     expect(service.concatStrings).toHaveBeenCalledTimes(1);
//     expect(service.concatStrings).toHaveBeenCalledWith('papai','noel','canino');
//     expect(service.concatStrings('papai','noel','canino')).toBe('papainoelcanino');
//   });

  test("Após criar os testes, restaure a implementação da primeira função.", () => {
    service.convertToUpperCase.mockRestore();

    expect(service.convertToUpperCase('pastel')).toBe('PASTEL');

  });
});
