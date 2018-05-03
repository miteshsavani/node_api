const express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose'); 				// mongoose for mongodb
var methodOverride = require('method-override');

const app = express();
const option = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    reconnectTries: 30000
};



mongoose.connect('mongodb://localhost:27017/Mitesh',option);
 
app.use(bodyParser.urlencoded({extended : true}));
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request
app.use(bodyParser.json());


app.all("/*", function (req, res, next) {

  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Credentials",true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Accept,X-Access-Token,X-Key,Authorization,X-Requested-With,Origin,Access-Control-Allow-Origin,Access-Control-Allow-Credentials');
  if (req.method === 'OPTIONS') {
    res.status(200).end();
  } else {
  //res.json({message:'a new task has been createddsfasdfasfdsafdsafdsafdsf'});
   next();
  }
});

require('./router/router')(app);
app.get('/',(req,res) =>{
    res.json({'message': 'Welcome to the site'});
});

app.listen(3030,()=>{
console.log('server is listening on port 3030');
})