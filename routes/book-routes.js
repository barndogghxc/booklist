const express = require('express');
const bookRoutes = express.Router();

bookRoutes.get('/', function(req, res) {
	res.send(' books index');
});

bookRoutes.post('/', function(req, res) {
	res.send(' book create');
});

bookRoutes.get('/:id', function(req, res) {
	res.send(' get book id ' + req.params.id);
});

bookRoutes.put('/:id', function(req, res) {
	res.send(' update book id ' + req.params.id);
});

bookRoutes.delete('/:id', function(req, res) {
	res.send(' delete book id ' + req.params.id);
});

module.exports = booksRoutes
