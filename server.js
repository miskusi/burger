// Node/NPM Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require("path");
var exphbs = require("express-handlebars");

// Sets up the Express App
var app = express();

// Sets up the Express app to handle data parsing
app.use(express.static(path.join(__dirname, "./public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Start server
var port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log("Server listening on port " + port);
});
