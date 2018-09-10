// Initial starting point for Node/Express server

// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var app = express();
var routes = require("./controllers/burgers_controller.js");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);

var PORT = process.env.PORT || 8080;

// Starts the server to listen on port
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT + ". If on local host, you can click http://localhost:" + PORT);
});