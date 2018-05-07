const UserCntrl = require('../container/userContainer');
const GeoCntrl = require('../container/geolocationContainer');
const UsernameCntrl = require('../container/usernameContainer');
module.exports = (app) => {

    app.get('/user', UserCntrl.GetUserData);
    app.post('/user',UserCntrl.AddUserData);
	app.delete('/user',UserCntrl.DeleteUserData);
    app.put('/user',UserCntrl.UpdateUserData);
    
    app.post('/Geo',GeoCntrl.AddGeolocation);

    app.post('/username',UsernameCntrl.Addusername);
    app.post('/getusername', UsernameCntrl.GetUserUUID);
}