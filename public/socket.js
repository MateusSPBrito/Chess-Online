const socket = io('http://192.168.1.12:3000/');

const socketEmit = (path, data) => {
    socket.emit(path, data)
}

socket.on('connect', () => {
    console.log('Conectado ao servidor com ID:', socket.id)

    socket.on('new-game-response', (obj) => {
        if (obj.error) return alert(obj.error.message)
        game.newGame(obj)
    })
})

