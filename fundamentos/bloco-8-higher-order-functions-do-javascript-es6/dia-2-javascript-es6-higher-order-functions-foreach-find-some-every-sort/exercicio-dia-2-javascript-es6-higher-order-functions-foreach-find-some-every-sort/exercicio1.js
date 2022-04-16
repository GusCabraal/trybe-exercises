const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

//   1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// Dica: use a função find .
function authorBornIn1947() {
    return books.find(({author: { birthYear }}) => birthYear === 1947)
  // escreva aqui o seu código
}
// const {author: {name}} = authorBornIn1947();
// console.log(name);

// 2 - Retorne o nome do livro de menor nome.
// Dica: use a função forEach .
function smallerName() {
    // escreva aqui o seu código
    return books.reduce((acc, {name}) => acc.length > name.length ? acc : name, books[0].name)
    // Variável nameBook que receberá o valor do menor nome;
  }
  // console.log(smallerName());

//   3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
// const expectedResult = {
//     author: {
//       birthYear: 1948,
//       name: 'George R. R. Martin',
//     },
//     genre: 'Fantasia',
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     releaseYear: 1991,
//   };
  
  function getNamedBook() {
    // escreva seu código aqui
    return books.find(({name}) => name.length === 26);

  }
  // console.log(getNamedBook());

  // 4 - Ordene os livros por data de lançamento em ordem decrescente.
function booksOrderedByReleaseYearDesc() {
    // escreva aqui seu código
    return books.sort(({releaseYear: anoA}, {releaseYear : anoB}) => anoA - anoB)
  }
  // console.log(booksOrderedByReleaseYearDesc());

//   5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

// const expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
    return books.every(({author: {birthYear}}) => birthYear <= 2000 && birthYear > 1900)
}

// console.log(everyoneWasBornOnSecXX());

// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.

// const expectedResult = true;

function someBookWasReleaseOnThe80s() {
    // escreva seu código aqui
    return books.some(({releaseYear}) => releaseYear > 1980 && releaseYear <= 1990);
}
// console.log(someBookWasReleaseOnThe80s());

// const expectedResult = false;

function authorUnique() {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}

console.log(authorUnique());

