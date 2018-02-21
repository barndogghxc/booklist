
const express = require('express');

const logger = require('morgan');

const bodyParser = require('body-parser');

const booksRouter = require('./routes/book-routes');

const port = process.env.PORT || 3000;


// Init App
const app = express();

// Logging
app.use(logger('dev'));

app.use(bodyParser.json());

// Home Route
app.get('/', function(req, res){
	res.json({
		message: 'hello goat this is a booklist'
	});
});

// Middleware
app.use('/books', booksRouter);

// Error handling
app.use('*', function(req, res){
	res.status(404).json('Not Found!');
});

app.listen(port, function(){
	console.log(`Server started on port ${port}`);
});