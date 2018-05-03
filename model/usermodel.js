var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username: {
			type: String,
			required: 'Please give username'
	},
	firstname: {
			type: String,
			required: 'Please provide firstname'
	},
	lastname: {
			type: String
	}
});

module.exports = mongoose.model('usermodel', userSchema);