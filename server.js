
const express = require('express');

const logger = require('morgan');

const port = process.env.PORT || 3000;

// Init App
const app = express();

// Logging
app.use(logger('dev'));

// Home Route
app.get('/', function(req, res){
	res.json({
		message: 'hello goat this is a booklist';
	})
})

app.listen(port, function(){
	console.log(`Server started on port ${port}`);
});