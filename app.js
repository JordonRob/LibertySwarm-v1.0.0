var express = require('express');
var app = express();
var serv = require('http').Server(app);


app.get('/',function(req,res){
    res.sendFile(_dirname+'/Client/LibertySwarm.html');
    });
app.use('/Client',express.static(_dirname+'Client'));
    serv.listen(2000);

console.log("Server Started");


var io = require('socket.io')(serv,{});
io.sockets.on('connection', function(socket){
    console.log('socket connection');
});
    
 