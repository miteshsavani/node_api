exports.GetUserData = (req,res) =>{
    res.json([
            {'name':'mitesh', 'surname':'savani'},
            {'name':'Sanket', 'surname':'patel'} ] );
}

exports.AddUserData = (req,res) =>{
    if(!req.params.id) {
        return res.status(400).send({
            message: "Please pass id of user "
        });
    }
    res.json('Post User Data' + req.params.id );
}