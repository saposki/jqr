var express = require('express');
var app = express();

var PORT = 7070;

app.get('/cheer.txt', function(req, res){
  res.end('You have quite lovely eyes.');
})
app.get('/jeer.txt', function(req, res){
  res.end('Jerk.');
})

var server = app.listen(PORT, function(){
  console.log('Listening on port: ', PORT);
});
