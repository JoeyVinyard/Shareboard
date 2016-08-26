var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var clients = [];//Initialize a new array to hold all the clients
var newClient;
io.on('connection', function(user){
	console.log('user connected');
	user.on('draw', function(inf){
		io.emit('drawPoint',inf);
	})
});
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.use(express.static('public'));

http.listen(process.env.PORT || 81, function(){
  console.log('listening on *:81');
});