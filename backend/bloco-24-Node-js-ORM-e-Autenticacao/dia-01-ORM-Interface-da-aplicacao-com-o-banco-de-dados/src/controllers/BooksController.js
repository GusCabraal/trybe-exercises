const bookService = require("../services/BookService");

const getAll = async (_req, res) => {
  try {
    const books = await bookService.getAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Ocorreu um erro" });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const books = await bookService.getById(id);
    if(books){
      return res.status(200).json(books);
    }
    res.status(404).json({ message: "Book not found" });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Ocorreu um erro" });
  }
};
const getByAuthor = async (req, res) => {
  try {
    const { name } = req.query;
    console.log(name);
    const books = await bookService.getByAuthor(name);
    if(books){
      return res.status(200).json(books);
    }
    res.status(404).json({ message: "Book not found" });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Ocorreu um erro" });
  }
};

const create = async (req, res) => {
  try {
    const books = await bookService.create(req.body);
    return res.status(201).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Ocorreu um erro" });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const books = await bookService.update(id, req.body);
    if(books){
      return res.status(200).json(books);
    }
    res.status(404).json({ message: "Book not found" });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Ocorreu um erro" });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const books = await bookService.remove(id);
    if(books){
      return res.status(204).json(books);
    }
    res.status(404).json({ message: "Book not found" });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Algo deu errado" });
  }
};

module.exports = {
  getAll,
  getById,
  getByAuthor,
  create,
  update,
  remove,
};
