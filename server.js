const express = require('express');
const app = express();
var path = require('path');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static("public"));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.get('/remote', (req, res) =>{
    res.sendFile(path.join(__dirname + '/public/remote.html'));
})

var x = 0;
io.on('connection', function (socket) {

    socket.on('move', function (data) {
       console.log(x + data)
       x++;
       io.emit('move', data);
    });
 });

http.listen( 3000, ()=>{
    console.log('App is listening...')
})
