// importing the express module
var express = require('express');

// creating the app
var app = express();

// creating first route
app.get('/', function(req, res){
   res.send("Hello From Main route");
});

app.listen(3000, () => {
    console.log("Listening on port: ", 3000);
});
