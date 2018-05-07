var mongoose = require('mongoose');

var usernameSchema = new mongoose.Schema({
	username: {
			type: String
	},
	DeviceUUID: {
			type: String
	}
});

module.exports = mongoose.model('username', usernameSchema);