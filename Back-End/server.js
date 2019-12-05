// importing the express module
var express = require('express');
// creating the app
var app = express();
// Required to parse json
var body_parser= require('body-parser');
app.use(body_parser.json());


// --------------------------------------
// Connection to MQTT Broker
var mqtt = require('mqtt');

// Client Connection
var client = mqtt.connect('http://212.98.137.194:1883', {"username": "user", "password": "bonjour"})

// On connection performed
client.on('connect', function () {
    console.log("Connected");
    // Client Subscription to Topic
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
    console.log("obj - ", obj );
    // client.end()
    console.log(message_str);
})
// --------------------------------------

var MGresponse;
var database;

async function GetData (CollName){
    try{
        const collection = await database.collection(CollName);
        const item = await collection.find().toArray();
        return item;
    }catch(err){
        return err;
    }
}
// Client connection to MongoDb

// Main Route
app.get('/', function(req, res){
    res.send("Hello from root");
});

// Testing Route
app.get('/test', function(req, res){
    res.send("Hello from root");
});

// Get all the rows in Classrooms Collection
app.get("/getClassrooms", function(req, res){
    try{
        GetData("Classrooms").then((data) => {
            res.send(data);
        })
    }catch(err){
        res.send(err)
    }
});

// Get all the rows in Energy_Consumption Collection
app.get("/getEnergyConsumption", function(req, res){
    try{
        GetData("Energy_Consumption").then((data) => {
            res.send(data);
        })
    }catch(err){
        res.send(err)
    }
});

app.listen(3000, "10.81.8.200" , async () => {
    console.log("Listening on port: ", 3000);
    MongoClient = require('mongodb').MongoClient;
    DBConnectionString = 'mongodb+srv://admin:admin@cluster0-p5xwn.mongodb.net/test?retryWrites=true&w=majority';
    try{
        MGresponse = await MongoClient.connect(DBConnectionString, 
            {
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        });
        database = await MGresponse.db("IoT_Data");
    }catch(err){
        return err;
    }
});
