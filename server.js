const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended : true}))

app.use(bodyParser.json())

require('./router/user')(app);
app.get('/',(req,res) =>{
    res.json({'message': 'Welcome to the site'});
});

app.listen(3030,()=>{
console.log('server is listening on port 3030');
})