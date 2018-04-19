/*
Michael Zarate
MEAN stack 
setting up express

 */
var express = require('express');
var app = express();
var path = require('path');

app.set('port', 3000);

/* Setting up static middlewear
*/
app.use(express.static(path.join(__dirname, 'public')));



app.get('/json', function(req, res){
    console.log("Get the  JSON")
    res
        .status(200)
        .json( {"jsonData" : true })
})

app.get('/file', function(req, res){
    console.log("Get the  FILE")
    res
        .status(200)
        .sendFile(path.join(__dirname, 'app.js'))
})

var server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log('Magic happens on port ' + port);
});

