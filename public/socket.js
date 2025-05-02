const socket = io('http://localhost:3000/');

const newGame = () => {
    socket.emit('new-game', { name: 'amataeudadass' })

}

socket.on('connect', () => {

    console.log('Conectado ao servidor com ID:', socket.id)

    socket.on('new-game-response', (obj) => { console.log(obj) })

    newGame()
})

