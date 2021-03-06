const express = require('express');
const app = express();
const http =  require('http').Server(app);
const io = require('socket.io')(http);
app.get('/', (req, res) => res.render('index.ejs') );

app.get('/chat', (req, res) => res.send('Miguel Angel') );
io.sockets.on('connection', socket => {
       //ask for the Nmae
socket.on('username', username => {
       socket.username = username;
       io.emit('is_online', '<i>' + username + 'it´s joined on the chat! </i>');
})

socket.on('disconnect', username => {
       io.emit('is_online', '<i>' + socket.username + 'it´s leaving');
});
socket.on('chat_message', message => {
       io.emit('chat_message', '<strong>' + socket.username + '</strong>: ' + message);
});


});

const server = http.listen(4000, () => console.log('it´s working right now'));