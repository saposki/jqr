var express = require('express');
var app = express();

var PORT = 8080;

// app.use(express.static(__dirname + '/public'));
app.get('/team/:name', function(req, res){
  res.setHeader('Content-Type', 'text/plain');
  res.send('You picked ' + req.params.name);
});

var server = app.listen(PORT);
