const socket = io("http://localhost:4000");

socket.on("connect", () => {

    let btn = document.getElementById('poupee');

    let green = document.getElementById('green');
    let blue = document.getElementById('blue');
    let red = document.getElementById('red');

    green.addEventListener("click", () => {
        // 1. Evenement color envoyé
        socket.emit("color", "green");
    });

    blue.addEventListener("click", () => {
        // 1. Evenement color envoyé
        socket.emit("color", "blue");
    });

    red.addEventListener("click", () => {
        // 1. Evenement color envoyé
        socket.emit("color", "red");
    });

    btn.addEventListener("click", () => {
        console.log("Coucou Krystel!");
        // Envoyer un événement au serveur
        socket.emit("doll", "Un petit truc");
    });

    // 4. Réception colorReceived
    socket.on('colorReceived', (color) => {
        document.body.style.backgroundColor=color;
    });
});