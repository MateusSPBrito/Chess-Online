const socket = io('http://localhost:3000/')

const socketEmit = (path, data) => { socket.emit(path, data) }

const socketOn = (path, callback) => { socket.on(path, callback) }

socket.on('connect', () => { player.defSocketId(socket.id) })