const gameService = require("../services/game_service");

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('Cliente conectado:', socket.id);

        socket.on('new-game', (obj) => {
            const game = gameService.newGame(obj, socket.id)
            socket.emit('new-game-response', game)
        });

        socket.on('access-game', (obj) => {
            const game = gameService.accessGame(obj, socket.id)
            socket.emit('access-game-response', game)
        })

        socket.on('disconnect', () => { gameService.disconnectPlayer(socket.id) });
    });
};