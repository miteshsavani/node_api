var mongoose = require('mongoose');

var geolocationSchema = new mongoose.Schema({
	DeviceUUID: {
		type: String
	},
	Latitude: {
			type: String
	},
	Longitude: {
			type: String
	},
	Altitude: {
			type: String
	},
	Accuracy: {
			type: String
	},
	Altitude_Accuracy: {
			type: String
    },
    Heading: {
        type: String
    },
    Speed: {
        type: String
    },
    Timestamp: {
        type: String
    }
});

module.exports = mongoose.model('geolocation', geolocationSchema);