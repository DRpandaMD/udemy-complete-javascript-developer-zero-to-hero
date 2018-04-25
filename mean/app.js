/*
Michael Zarate
MEAN stack 
setting up express

 */
require('./api/data/dbconnection.js').open()
var express = require('express');
var app = express();
var path = require('path');
var routes = require('./api/routes');
var bodyParser = require('body-parser')


app.set('port', 3000);

/*ORDER MATTERS : set up logging middlewear */
app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

/* Setting up static middlewear */
app.use(express.static(path.join(__dirname, 'public')));

/*Set up the body parser to send form data */
app.use(bodyParser.urlencoded({ extended: false }))

/* point the api route to our routes folder */
app.use('/api', routes)

/*Set up listening on the port */
var server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log('Magic happens on port ' + port);
});

