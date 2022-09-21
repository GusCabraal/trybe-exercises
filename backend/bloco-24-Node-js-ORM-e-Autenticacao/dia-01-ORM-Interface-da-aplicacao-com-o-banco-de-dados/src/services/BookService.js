// src/services/user.service.js
const { Op } = require("sequelize");
const { Book } = require("../models");

const getAll = async () => {
  const books = await Book.findAll();

  return books;
};

const getById = async (id) => {
  const books = await Book.findByPk(id);
  if (books){
    return books;
  }
  return false;
};

const getByAuthor = async (name) => {
  if(!name){
    const books = await Book.findAll();
    return books;
  }
  const books = await Book.findAll({
    where: {
      author: {
        [Op.like]: `%${name}%`
      }},
      order:[
      ['title', 'DESC']],
  });
  if (books.length >= 1){
    return books;
  }
  return false;
};

const create = async ({ title, author, pageQuantity }) => {
  const newBook = await Book.create({ title, author, pageQuantity });
  return newBook;
};

const update = async (id, { title, author, pageQuantity }) => {
  const [updatedBook] = await Book.update(
    { title, author, pageQuantity },
    { where: { id } },
  );

  console.log(updatedBook); // confira o que é retornado quando o user com o id é ou não encontrado;
  return updatedBook;
};

const remove = async (id) => {
  const book = await Book.destroy({ where: { id } });

  console.log(book); // confira o que é retornado quando o user com o id é ou não encontrado;
  return book;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByAuthor,
  // getByIdAndEmail,
  // deleteUser,
};
