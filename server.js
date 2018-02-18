const express = require('express');

const port = process.env.PORT || 3000;

const logger = require('morgan');

const app = express();

app.get('/', function(req, res){
	res.send('hello goat this is a booklist');
});

app.listen(port, function(){
	console.log(`Server started on port ${port}`);
});