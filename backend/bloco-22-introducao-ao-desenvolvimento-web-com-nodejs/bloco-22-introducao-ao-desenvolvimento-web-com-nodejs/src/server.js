// src/server.js
const app = require('./app');

const activities = [
  {
    id: 1,
    description: 'Banho no cachorro',
    status: 'A fazer',
  },
  {
    id: 2,
    description: 'Cortar a grama',
    status: 'A fazer',
  },
  {
    id: 3,
    description: 'Estudar JavaScript',
    status: 'Feito',
  },
];

app.listen(3001, () => console.log('server running on port 3001'));

app.post('/myActivities', (req, res) => {
  res.status(201).json(activities);
});

// Crie um endpoint do tipo GET com a rota /myActivities/:id,
// que possa listar uma atividade do array por id 🚀

app.get('/myActivities/:id', (request, response) => {
    const { id } = request.params;
    const activity = activities.find((act) => act.id === Number(id));

    response.status(200).json(activity);
});
// Crie um endpoint do tipo GET com a rota /myActivities,
// que possa listar todas as atividades do array 🚀

app.get('/myActivities', (request, response) => response.json(activities));

// Crie um endpoint do tipo GET com a rota /filter/myActivities, que possa listar todas as atividades filtradas por status do array. A rota deve receber a informação por query e a chave deve-se chamar status. A chave status vai trazer consigo valor de Feito ou A fazer e o endpoint deve fazer o filtro das atividades 🚀

app.get('/filter/myActivities', (request, response) => {
  const { status } = request.query;
  let filteredActivities = activities;

  if (status) {
  filteredActivities = activities.filter((act) => act.status.toLowerCase() === status);
  }

  response.json(filteredActivities);
});

// Crie um endpoint do tipo GET com a rota /search/myActivities, que possa listar todas as atividades filtradas por um termo específico do array. A rota deve receber a informação por query e a chave deve-se chamar q. A chave vai trazer consigo valor de 'cachorro' por exemplo, e o filtro deve trazer apenas as atividades com esse termo, se não encontrar, traga um array vazio 🚀

app.get('/search/myActivities', (request, response) => {
  const { q } = request.query;

  let filteredActivities = [];

  if (q) {
  filteredActivities = activities.filter((act) => act.description.toLowerCase().includes(q));
  }
  response.json(filteredActivities);
});