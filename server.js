// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');

require('dotenv').config();

// bodyParser Middleware to allow different encoding requests
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set our port
var port = process.env.PORT || 8080;

// set the static files location
app.use(express.static(__dirname + '/public'));


//Routes API
var router = express.Router();
app.use('/', router);

require('./app/routes')(router); // configure our routes


// startup our app at http://localhost:3000
console.log(`Listening on ${port}`);
app.listen(port);


// expose app
exports = module.exports = app;
