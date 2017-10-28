'use strict';
module.exports = function(app) {
	//required the controller so each route method can call its handler function
	const todoList = require('../controllers/todoListController');

	//ROUTING: how an app responds to client request for specific endpoint, which is a URL or path and a specific HTTP request method like GET, POST, DELETE, etc.

	//todoList Routes - 2 routes defined
	app.route('/tasks')
		.get(todoList.list_all_tasks)
		.post(todoList.create_a_task);

	app.route('/tasks/:taskId')
		.get(todoList.read_a_task)
		.put(todoList.update_a_task)
		.delete(todoList.delete_a_task);
};