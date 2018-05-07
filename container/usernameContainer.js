var UsernameC = require('./../model/usernameModel');

exports.Addusername = (req, res) => {

    console.log('body: ' + JSON.stringify(req.body));
	//var json = JSON.parse(JSON.stringify(req.body));
	 //res.json('User Createdmiteshadfdf' + JSON.stringify(req.body));	
	
	 if(!req.body.DeviceUUID) res.json('DeviceUUID is missing');
	 if(!req.body.username) res.json('username is missing');

     UsernameC.create({
			DeviceUUID: req.body.DeviceUUID,
            username: req.body.username,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);
			res.json('username Added');		
        });

}

exports.GetUserUUID = (req,res) =>{	
    
    console.log('GetUserUUID called');
    if(!req.body.DeviceUUID) res.json('DeviceUUID is missing');

    
	UsernameC.findOne({'DeviceUUID': req.body.DeviceUUID}).exec(getData);

    function getData(error, username) 
    {
        console.log('--- ' + username, error);
        res.setHeader('Content-Type', 'application/json');
		if(error)
		 res.send(error);
		else
        {
            if(username === null) 
                res.json({'error':'username not found'});
            else
                res.json(username);
    
        }    //res.send(req.query.callback + '('+ users + ');');
        	}
}