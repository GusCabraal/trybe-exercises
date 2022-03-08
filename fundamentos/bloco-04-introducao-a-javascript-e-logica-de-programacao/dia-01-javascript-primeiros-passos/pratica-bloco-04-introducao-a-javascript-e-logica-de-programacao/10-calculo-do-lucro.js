const custoProduto = 200;
const valorVenda = 300;
const imposto = 0.2;
const unidadesVendidas = 1000;
let lucro, valorCustoTotal, valorVendaTotal;

valorCustoTotal = (custoProduto * (1 + imposto)) * unidadesVendidas;
valorVendaTotal = valorVenda * unidadesVendidas;
lucro = valorVendaTotal - valorCustoTotal;

console.log ("Lucro foi de R$ "+ lucro)