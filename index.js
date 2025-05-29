const express = require('express')
const { createServer } = require("http")
const { Server } = require("socket.io")
const cors = require('cors')

const routes = require('./src/routes')
const gameSocket = require('./src/sockets/game_socket')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))
app.use(routes)

const server = createServer(app)
const io = new Server(server, {})
gameSocket(io)

server.listen(3000, '0.0.0.0', () => {
    console.log('server on!')
})

// const Board = require('./src/class/Board')
// const board = new Board()
