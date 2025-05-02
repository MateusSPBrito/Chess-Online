const gameService = require("../services/game_service");

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('Cliente conectado:', socket.id);

        socket.on('new-game', (obj) => {
            const game = gameService.newGame(obj, socket.id)
            socket.emit('new-game-response', game)
        });
    });
};