# ProjetIot

# Project Requirements

- Node JS (Backend)
- Arduino Code + Sensor
- React Native (Front End)

# How to run the Project ?

- from ./Back-End in CMD run the following command to run the backend server :
- we sgould download node js 
- in the terminal >cd .\Back-End\
> npm install

> ``` node server.js ```

- run the arduino code

# Database Design

**Setup connection security**

Creating a cluster in MongoDB
Connect it to your IP 
Credentials for the MongoDb user:
User: admin Pass: admin 

**Choose a connection method**

Connect with Your Application 

**Connect**

Driver: Node.js -> using javascript 
Connection string: 
mongodb+srv://admin:<password>@cluster0-p5xwn.mongodb.net/test?retryWrites=true&w=majority

**In MongoDb->Clusters->Collections**

Add my own data
database name: IoT_Data
Collection name = table name 

In collections: Insert Document

First collection: the data of the classrroms
1)NumSalle (int)
2)NbLampes (int)

**the id generated is used from the backend**

Second collection: the daily consumption of energy per classroom
1)NumSalle (int)
2)Date (date)
3)NbHours (double)
4)Consumption (double)

**Creating the objects in the first table**

Cluster-> collections: Classrooms
3 classes created 


**Connecting the database to the backend**




# MQTT

**Connecting Arduino to MQTT**

BUT: ebaat lal backend 
-> ana bebaat lal mqtt w l backend byetsama3 aal mqtt 
 The server/ backend needs to listen 
 ExpressJS pour qu'il puisse travailler sur mqtt il faut installer la librairie 

dans le terminal -> npm install mqtt

 to import the library in th code: 

 > ``` var mqtt = require('mqtt'); ```

 in order to connect sur l'ip et le port:

> ``` var client = mqtt.connect('http://212.98.137.194:1883', {"username": "user", "password": "bonjour"}) ``` 

 we subscribe sur le topic:

> ``` client.subscribe('application/19/device/804a2bad98eef9b1/rx', function (err) { .. ```

qd il fait subscribe -> listening until i get a msg -> il l'imprime des qu'il le recoit 

> ``` client.on('message', function (topic, message) { ... ```


# Backend

**Requirement**

Install node.js from https://nodejs.org/en/download/

## Initializing the backend Server

in the terminal (in Backend-End) run :

> ``` npm init ```

Then choose the package name, version, description, entry point etc..

then run:

> ``` npm install --save express ```

> ``` npm install -g nodemon ```

create a file called "server.js" in back-end folder

and then add to it:

```
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


```


# Frontend



# Arduino


# Theoretical Analysis
