const bookService = require("../services/book.service");

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
    return res.status(200).json(books);
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
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Ocorreu um erro" });
  }
};
const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const books = await bookService.remove(id);
    return res.status(204).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Algo deu errado" });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
