# ProjetIot

I am testing Git
hi
hi
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

**Connecting the database to the backend**






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
