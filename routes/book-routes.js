const express = require('express');
const booksRouter = express.Router();
const booksController = require('../controllers/booksController');

booksRouter.get('/', booksController.index)

booksRouter.post('/', booksController.create)


booksRouter.get('/:id', booksController.getOne)


booksRouter.put('/:id', booksController.update)


booksRouter.delete('/:id', booksController.delete)

module.exports = booksRouter
