const customer = {
  firstName: "Roberto",
  age: 22,
  job: "Teacher",
};

let newKey = "lastName";
const lastName = "Ferreira";
customer[newKey] = lastName;
newKey = "fullName";
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);

const novoObjeto = (objeto, propriedade, valor) => {
  objeto[propriedade] = valor;
  return objeto;
};
const obj = {
  firstName: "Roberto",
  age: 22,
  job: "Teacher",
};
console.log(novoObjeto(obj, "lastName", "cabral"))
