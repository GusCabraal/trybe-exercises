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
    return books.find((book) => book.author.birthYear === 1947)
  // escreva aqui o seu código
}
// console.log(authorBornIn1947());

// 2 - Retorne o nome do livro de menor nome.
// Dica: use a função forEach .
function smallerName() {
    let nameBook;
    let tamanhoLivro = 100;
    // escreva aqui o seu código
    books.forEach((book, index,array) => {
        if(book.name.length < tamanhoLivro){
            tamanhoLivro = book.name.length;
            nameBook = book.name; 
        }
    })
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
  }
//   console.log(smallerName());

//   3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
const expectedResult = {
    author: {
      birthYear: 1948,
      name: 'George R. R. Martin',
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991,
  };
  
  function getNamedBook() {
    // escreva seu código aqui
    return books.find((book) => book.name.length === 26)

  }
//   console.log(getNamedBook());
function booksOrderedByReleaseYearDesc() {
    // escreva aqui seu código
    return books.sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear)
  }
//   console.log(booksOrderedByReleaseYearDesc());

//   5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

// const expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
    return books.every((book) => book.author.birthYear < 2000)
}

// console.log(everyoneWasBornOnSecXX());

// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.

// const expectedResult = true;

function someBookWasReleaseOnThe80s() {
    // escreva seu código aqui
    return books.some((book) => book.releaseYear > 1980 && book.releaseYear < 1990);
}
// console.log(someBookWasReleaseOnThe80s());

// const expectedResult = false;

function authorUnique() {
  // escreva seu código aqui
  books.forEach((book, index,array) => {
    console.log(book.author.birthYear);
})
}

authorUnique();
