const procuraLetra = (text, palavra) => {
  let word = text.split("");
  for (let i = 0; i < word.length; i += 1) {
    word[i] === "x" ? (word[i] = palavra) : false;
  }
  return word.join("");
};

console.log(procuraLetra("Tryber x aqui", "bebeto"));

const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

function buildSkillsPhrase(paramOne) {
  const fun1 = (paramInner) =>
    `Tryber ${paramInner} aqui!

      Tudo bem?`;

  let result = `${fun1(paramOne)}

   Minhas cinco principais habilidades são:`;

  array.forEach(
    (skill, index) =>
      (result = `${result}

    - ${skill}`)
  );

  result = `
 ${result}

    #goTrybe
    `;

  return result;
}

console.log(buildSkillsPhrase("Lucas"));
