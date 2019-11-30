// importing the express module
var express = require('express');

// creating the app
var app = express();

var body_parser= require('body-parser');
app.use(body_parser.json());
// --------------------------------------
var mqtt = require('mqtt');
// Client Connection
var client = mqtt.connect('http://212.98.137.194:1883', {"username": "user", "password": "bonjour"})

client.on('connect', function () {
    console.log("Connected")
    // Client Subscription
    client.subscribe('application/19/device/804a2bad98eef9b1/rx', function (err) {
        console.log("Subscribed");
        if(err){
            console.log("error");
        }
    })
})

// When someone else publishes data
client.on('message', function (topic, message) {
    // message is Buffer
    let message_str = JSON.parse(message.toString());
    obj = message_str.object.payload;
    console.log("obj----------------------", obj );

    // client.end()
  })
// --------------------------------------



async function GetData (dbName, CollName){
    var that=this;
    MongoClient = require('mongodb').MongoClient;
    Mongo = require('mongodb');
    DBConnectionString = 'mongodb+srv://admin:admin@cluster0-p5xwn.mongodb.net/test?retryWrites=true&w=majority';
    console.log("i am here");
    try{
        var response = await MongoClient.connect(DBConnectionString, {
            useNewUrlParser: true, useUnifiedTopology: true }
            );
            var database = await response.db(dbName);
            const collection = await database.collection(CollName);
            const item = await collection.find();
            
            const document = await item.toArray();
            return document;
    }catch(err){
        return err;

    }
}
// Client connection to MongoDb

console.log("obj----------------------" );
// creating first route
app.get('/', function(req, res){
    try{
        GetData("IoT_Data","Classrooms").then((response) => {
            console.log(response);
            res.send(response);
        })
      

    }catch(err){
        res.send(err)
    }
});

app.listen(3000, () => {
    console.log("Listening on port: ", 3000);
});
