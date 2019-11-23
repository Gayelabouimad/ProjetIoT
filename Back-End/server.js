// importing the express module
var express = require('express');

// creating the app
var app = express();


// --------------------------------------
var mqtt = require('mqtt')
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



// creating first route
app.get('/', function(req, res){
   res.send("Hello From Main route");
});

app.listen(3000, () => {
    console.log("Listening on port: ", 3000);
});
