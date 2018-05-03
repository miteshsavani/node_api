var User = require('./../model/usermodel');

exports.GetUserData = (req,res) =>{	
	if(!req.query.callback){
		req.query.callback = 'POSTMan';
	}

	User.find().select({username: 1, firstname: 1, lastname: 1, _id:1}).exec(getData);

	function getData(error, users) {
		if(error)
		 res.send(error);
		else
		//res.send(req.query.callback + '('+ users + ');');
		res.json(users);
	}
}

exports.AddUserData = (req,res) =>{
	//res.send(JSON.stringify({ a: 1 }));
	//res.send('Tledfsafsf({mitesh'+req.body.command+'});');
	console.log('body: ' + JSON.stringify(req.body));
	var json = JSON.parse(JSON.stringify(req.body));
	 //res.json('User Createdmiteshadfdf' + JSON.stringify(req.body));	
	
	User.create({
            username: req.body.username,
			firstname: req.body.firstname,
			lastname: req.body.lastname,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);
			res.json('User Created ');		
        });
		
}

exports.DeleteUserData = (req, res) => {

User.find({_id: req.body._id}).remove(callback);

function callback(error, result)
{
		if(error) res.send(error);
		
		res.json('User Deleted');
}
}

