var Geo = require('./../model/geolocationmodel');

exports.AddGeolocation = (req, res) => {

    console.log('body: ' + JSON.stringify(req.body));
	//var json = JSON.parse(JSON.stringify(req.body));
	 //res.json('User Createdmiteshadfdf' + JSON.stringify(req.body));	
	
	 if(!req.body.Latitude) res.json('Latitude is missing');
	 if(!req.body.Longitude) res.json('Longitude is missing');

	Geo.create({
			DeviceUUID: req.body.DeviceUUID,
            Latitude: req.body.Latitude,
			Longitude: req.body.Longitude,
			Altitude: req.body.Altitude,
			Accuracy: req.body.Accuracy,
			Altitude_Accuracy: req.body.Altitude_Accuracy,
			Heading: req.body.Heading,
			Speed: req.body.Speed,
			Timestamp: req.body.Timestamp,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);
			res.json('Location Added');		
        });

}