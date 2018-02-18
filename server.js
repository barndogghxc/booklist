
const express = require('express');

const logger = require('morgan');

const port = process.env.PORT || 3000;

const bookRoutes = require('./routes/book-routes');

// Init App
const app = express();

// Logging
app.use(logger('dev'));

// Home Route
app.get('/', function(req, res){
	res.json({
		message: 'hello goat this is a booklist';
	});
});

// Middleware
app.use('/books', bookRoutes);

// Error handling
app.use('*', function(req, res){
	res.status(404).json('Not Found!');
});

app.listen(port, function(){
	console.log(`Server started on port ${port}`);
});