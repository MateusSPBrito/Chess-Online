const { games, players } = require('../data/memoryStore');

class GameService {
    newGame(obj, socketId) {
        const player = this.defPlayerObj(obj, socketId)
        if (player.error) return player

        const newGame = this.defGameObj(obj, player)
        games.push(newGame)

        return newGame
    }

    defGameObj(obj, player) {
        const access = Date.now().toString(36).slice(-4).toUpperCase(); // Ex: "2K7A"

        return {
            status: 'WAITING',
            player1: player,
            white: obj.player,
            access
        }
    }

    defPlayerObj(obj, socketId) {
        const { name, avatar } = obj

        if (players.some(p => p.name === name)) return { error: { message: 'Nome do jogador em uso!' } }

        const player = { name, avatar, socketId }
        players.push(player)

        return player
    }
}

module.exports = new GameService()