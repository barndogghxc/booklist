const express = require('express');
const bookRoutes = express.Router();
const booksController = require('../controllers/booksController');

bookRoutes.get('/', booksController.index)

bookRoutes.post('/', booksController.create)


bookRoutes.get('/:id', booksController.getOne)


bookRoutes.put('/:id', booksController.update)


bookRoutes.delete('/:id', booksController.delete)

module.exports = booksRoutes
