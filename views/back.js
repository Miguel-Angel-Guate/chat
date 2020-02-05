// connect to backEnd
let  socket = io.connect('http:/localhost4000');

//send/receive without reload
$('form').submit( e => {
       e.preventDefault(); // prevents page reloading
       socket.emit('chat_messege', $('#txt').val());
       $('#txt').val('');
       return false;
});
// messeges of chat
socket.on('chat_message', msg => {
       $('#messages').append( $('<li>').html(msg) );
});

//welcome messege
socket.on('is_online', username =>  {
       $('#messages').append( $('<li>').html(username))
});

//ask for the Nmae

let username = prompt('how it´s your name?');
socket.emit('username', username);
