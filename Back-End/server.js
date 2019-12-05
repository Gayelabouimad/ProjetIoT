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

//Updating the data
async function Update(msg,numero_heures){
     try{
        id=msg.devEUI;
        console.log("we're here");
        const collection = await database.collection("Energy_Consumption");
        console.log("i am here");
        const update= await collection.update({Device_EUI: id}, {$set :{NbHours: numero_heures}});
        if(update){
            console.log("update worked");
        }else{
            console.error("update not working");
        }
        return update;
        
    }catch(err){
        return err;
    }
}

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
    // console.log(message_str);
    obj = message_str.object.payload;
    console.log("obj - ", obj );
    console.log(message_str);
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time)
    let base64data = Buffer.from("100").toString('base64');
    var object_to_send = {
        "confirmed": false,
        "fPort": 1,                            
        "data": base64data
        };
    console.log(object_to_send)
    client.publish("application/19/device/804a2bad98eef9b1/tx", JSON.stringify(object_to_send));
    // client.end()
    try{
        // if the lamp is On
        if(obj < 2){
            Update(message_str,10).then((result) => {
                console.log("i am in .then");
                console.log("result", result);
            });
        }

    }catch(err){
        console.log(err)
    }
}
)
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

app.listen(3000, "10.81.3.9" , async () => {
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
