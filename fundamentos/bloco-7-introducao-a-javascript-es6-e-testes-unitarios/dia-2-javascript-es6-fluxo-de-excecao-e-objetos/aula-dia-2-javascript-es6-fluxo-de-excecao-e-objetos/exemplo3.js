const student1 = {
  Html: "Muito Bom",
  Css: "Bom",
  JavaScript: "Ótimo",
  SoftSkills: "Ótimo",
};

const student2 = {
  Html: "Bom",
  Css: "Ótimo",
  JavaScript: "Ruim",
  SoftSkills: "Ótimo",
  Git: "Bom", // chave adicionada
};

const imprimir = (student) => {
  for (let key in student) {
    console.log(`${key}, Nível: ${student[key]}`);
  }
};
console.log("Estudante 1:");
imprimir(student1);
console.log("Estudante 2:");
imprimir(student2);

console.log(`${Object.keys(student1)}, Nível: ${Object.values(student2)}`);

