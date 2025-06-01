class Player {
    defSocketId(socketId) { this.socketId = socketId; console.log(socketId) }

    defNameAndColor(gameObj) {
        const { black, white } = gameObj

        if (black.socketId === this.socketId) {
            this.name = black.name
            this.color = 'black'
            return
        }
        this.name = white.name
        this.color = 'white'
    }
}