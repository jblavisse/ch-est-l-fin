const port = 4000;
const express = require('express');
const app = express();

const server = require("http").createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});

io.on('connection', (socket) => {
    console.log('a user connected');

    // Une fois connecté
    // Récupérer un événement du client
    socket.on('doll', (msg) => {
        console.log(msg);
    });

    // 2. Evenement color reçu
    socket.on('color', (color) => {

        console.log(color);
        // Ca transmet l'événement au front qui m'a contacté
        // Mais qu'à lui

        // 3. EMission colorReceived
        socket.emit('colorReceived', color);

        // Ca transmet l'événément à tous sauf au front
        // qui m'a contacté
        socket.broadcast.emit('colorReceived', color);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
        });
});



server.listen(port, () => {
    console.log(`App listening at http://localhost:4000`);
})