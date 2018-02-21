const booksDB = require('../models/booksDB');

module.exports = {
	index (req, res) {
		booksDB.findAll()
		.then(results => {
			res.json({
				message: 'ok',
				data: results
			})
		})
		.catch(err => {
			res.status(500).json({
				message: 'error',
				error: err
			})
		})
	},

	create(req, res){
		booksDB.save(req.body)
		.then(result => {
			res.json({
				message: 'ok',
				data: result
			})
		})
		.catch(err => {
			res.status(500).json({
				message: 'Error',
				error: err
			})
		})
	},

	getOne(req, res){
		booksDB.findOne(req.params.id)
		.then(result => {
			res.json({
				message: 'ok',
				data: result
			})
		})
		.catch(err => {
			res.status(500).json({
				message: 'Error',
				error: err
			})
		})
	},

	update(req, res){
		booksDB.update(req.body)
		.then(result => {
			res.json({
				message: 'ok',
				data: result
			})
		})
		.catch(err => {
			res.status(500).json({
				message: 'Error',
				error: err
			})
		})
	},

	delete(req, res){
		booksDB.destroy(req.params.id)
		.then(() => {
			res.json({
				message:'ok'
			})
		})
		.catch(err => {
			res.status(500).json({
				message: 'Error',
				error: err
			})
		})
	}
}