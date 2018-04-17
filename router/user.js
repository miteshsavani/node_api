const UserCntrl = require('../container/userContainer');
module.exports = (app) => {

    app.get('/user', UserCntrl.GetData );
}