const express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose'); 				// mongoose for mongodb
var methodOverride = require('method-override');
var MongoClient = require('mongodb').MongoClient;
mongoose.Promise = require('bluebird');
var database = require('./config/database'); 

const app = express();
const option = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    reconnectTries: 30000
};



//mongoose.connect('mongodb://127.0.0.1:27017/Mitesh');//,option);
//mongoose.connect('mongodb+srv://root:Mitesh107@cluster0-3kmje.mongodb.net/Mitesh');
 //mongoose.connect('mongodb://root:Mitesh107@cluster0-shard-00-00-3kmje.mongodb.net:27017,cluster0-shard-00-01-3kmje.mongodb.net:27017,cluster0-shard-00-02-3kmje.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');
mongoose.connect(database.remote);

 
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
/*var uri = 'mongodb+srv://root:Mitesh107@cluster0-3kmje.mongodb.net/Mitesh';
MongoClient.connect(uri, function(err, client) {
   const collection = client.db("Mitesh").collection("test");
   // perform actions on the collection object
   res.json({'connect': 'successful'});
   client.close();
});*/
  res.json({'message': 'Welcome to the site'});
});

app.get('/mitesh', (req, res) => { 
fs.readFile("index.html", function (error, pgResp) {
            if (error) {
                res.writeHead(404);
                res.write('Contents you are looking are Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(pgResp);
            }
             
            res.end();
        });

})

app.get('/Jquery.min_3.2.js', function(req, res){
res.sendFile(__dirname + '/Jquery.min_3.2.js'); 
})

app.listen(3030,()=>{
console.log('server is listening on port 3030');
});