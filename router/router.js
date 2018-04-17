const UserCntrl = require('../container/userContainer');
module.exports = (app) => {

    app.get('/user', UserCntrl.GetUserData );
    app.post('/user/:id',UserCntrl.AddUserData);
}