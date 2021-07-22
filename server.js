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

    socket.on('disconnect', () => {
        console.log('user disconnected');
        });
});



server.listen(port, () => {
    console.log(`App listening at http://localhost:4000`);
})