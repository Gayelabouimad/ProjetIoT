# ProjetIot

# Database Design



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