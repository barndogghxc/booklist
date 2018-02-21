
const express = require('express');

const logger = require('morgan');

const bodyParser = require('body-parser');

const booksRouter = require('./routes/book-routes');

const port = process.env.PORT || 3000;


// Init App
const app = express();

app.set('view engine', 'ejs')

// Logging
app.use(logger('dev'));

app.use(bodyParser.json());

// Home Route
app.get('/', function(req, res){
	res.render('index', {
		title: 'Books App',
		heading: 'welcome to the books app!'
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