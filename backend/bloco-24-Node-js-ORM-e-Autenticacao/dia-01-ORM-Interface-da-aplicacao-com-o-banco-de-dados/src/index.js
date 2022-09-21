const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const book = require('./controllers/BooksController');


app.use(express.json());

// app.get('/book', book.getAll);
app.get('/book', book.getByAuthor);
app.get('/book/:id', book.getById);
app.post('/book', book.create);
app.put('/book/:id', book.update);
app.delete('/book/:id', book.remove);

app.use((error, req, res, _next) => {
  if (error.status) { return res.status(error.status).json({ message: error.message }); }
  return res.status(500).json({ message: error.message });
});


app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));