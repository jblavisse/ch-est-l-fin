const socket = io("http://localhost:4000");

socket.on("connect", () => {

    let btn = document.getElementById('poupee');

    btn.addEventListener("click", () => {
        console.log("Coucou Krystel!");
        // Envoyer un événement au serveur
        socket.emit("doll", "Un petit truc");
    });
});