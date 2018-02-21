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
		booksDB.save
	}

	getOne(req, res){
		booksDB.findOne
	}

	update(req, res){
		booksDB.update
	}

	delete(req, res){
		booksDB.destroy
	}
}