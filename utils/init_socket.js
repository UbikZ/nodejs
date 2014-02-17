module.exports = function(server){
    // Websocket
    io = require('socket.io').listen(server);

    count = 0;
    listMessages = [];
    io.on('connection', function(socket) {
        count++;

        // Init
        socket.emit('init', {number: count, messages: listMessages});

        // People connected
        socket.broadcast.emit('count_user', {number: count});

        // Set user pseudo in session
        socket.on('pseudo', function(pseudo) {
            socket.set('pseudo', pseudo);
            socket.broadcast.emit('new_user', pseudo);
        });

        socket.on('add_msg', function(message) {
            socket.get('pseudo', function(error, pseudo) {
                var obj2send = {pseudo: pseudo, message: message};
                listMessages.push(obj2send);
                socket.broadcast.emit('display_msg', obj2send);
            });
        });

        socket.on('disconnect', function() {
            count--;
            socket.broadcast.emit('count', {number: count});
        });
    });
};

