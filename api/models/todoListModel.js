'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// setting up task collection - table
const TaskSchema = new Schema({
	name: {
		type: String,
		required: 'Kindly enter the name of the task'
	},
	Created_date: {
		type: Date,
		default: Date.now
	},
	status: {
		type: [{
			type: String,
			enum: ['pending', 'ongoing', 'completed']
		}],
		//every task has default value of pending status
		default: ['pending']
	}
});

module.exports = mongoose.model('Tasks', TaskSchema);