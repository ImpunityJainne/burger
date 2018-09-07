// Initial starting point for Node/Express server

// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Setting up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Starts the server to listen on port
app.listen(PORT, function() {
    console.log(
        "App listening on PORT " + PORT 
        "\nIf on local host, you can click http://localhost:" + PORT
    );
});