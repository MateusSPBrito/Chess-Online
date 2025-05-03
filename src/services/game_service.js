const { games, players } = require('../data/memoryStore');

class GameService {

    defGameObj(obj, player) {
        const access = Date.now().toString(36).slice(-4).toUpperCase(); // Ex: "2K7A"

        return {
            status: 'WAITING',
            player1: player,
            white: player,
            access
        }
    }

    defPlayerObj(obj, socketId) {
        const { name } = obj
        if (name === '') return { error: { message: 'Informe um nome!' } }
        const player = { name, socketId }
        players.push(player)

        return player
    }

    newGame(obj, socketId) {
        const player = this.defPlayerObj(obj, socketId)
        if (player.error) return player

        const newGame = this.defGameObj(obj, player)
        games.push(newGame)

        return newGame
    }

    accessGame(obj, socketId) {

        const player = this.defPlayerObj(obj, socketId)

        if (player.error) return player

        const game = this.searchAndUpdateGame(obj.access, player)
        if (game.error) return game

        return game
    }

    searchAndUpdateGame(access, player) {
        const game = games.find(g => g.access === access)

        if (!game) return { error: { message: 'Sala não encontrada!' } }
        if (game.status !== 'WAITING') return { error: { message: 'Partida já começou ou foi encerrada.' } }
        if (game.player2) return { error: { message: 'A sala já está cheia.' } }

        game.player2 = player;
        game.black = player;
        game.status = 'IN_PROGRESS';
        game.turn = 'white';

        return game;
    }

    disconnectPlayer(socketId) {
        const index = players.findIndex(p => p.socketId === socketId);
        if (index !== -1) players.splice(index, 1);
    }
}

module.exports = new GameService()