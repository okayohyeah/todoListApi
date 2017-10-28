const express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;

	//connect database to mongoose instance connection
	mongoose = require('mongoose'),
	
	//load created model, Task
	Task = require('./api/models/todoListModel'),
	
	//install bodyParser and use for incoming request bodies in middleware before handlers, available under the req.body property
	//It exposes various factories to create middlewares. All middlewares will populate the req.body property with the parsed body, or an empty object ({}) if there was no body to parse (or an error was returned).
	bodyParser = require('body-parser');

//mongoose instance connection url connection
const promise = mongoose.connect('mongodb://localhost/Tododb', {
	useMongoClient: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//express middleware - return reponse when incorrect route entered
// app.use(function(req, res) {
// 	res.status(404).send({url: req.originalUrl + ' not found'})
// });

//importing routes
const routes = require('./api/routes/todoListRoutes');
//register the route in the server
routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);