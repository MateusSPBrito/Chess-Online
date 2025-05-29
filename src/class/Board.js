const Rook = require("./Rook")
const Knight = require("./Knight")
const Bishop = require("./Bishop")
const Queen = require("./Queen")
const King = require("./King")
const Pawn = require("./Pawn")

class Board {
    constructor() {
        const board = this.generateCells()
        this.data = this.defPieces(board)
    }

    generateCells() {
        const board = []
        for (let row = 0; row < 8; row++) {
            const line = []
            for (let col = 0; col < 8; col++) line.push({ row, col, piece: null })
            board.push(line)
        }
        return board
    }

    defPieces(board) {
        board[0][0].piece = new Rook(0, 0, 'white')
        board[0][7].piece = new Rook(0, 7, 'white')

        board[0][1].piece = new Knight(0, 1, 'white')
        board[0][6].piece = new Knight(0, 6, 'white')

        board[0][2].piece = new Bishop(0, 2, 'white')
        board[0][5].piece = new Bishop(0, 5, 'white')

        board[0][3].piece = new Queen(0, 3, 'white')
        board[0][4].piece = new King(0, 4, 'white')

        board[1][0].piece = new Pawn(1, 0, 'white')
        board[1][1].piece = new Pawn(1, 1, 'white')
        board[1][2].piece = new Pawn(1, 2, 'white')
        board[1][3].piece = new Pawn(1, 3, 'white')
        board[1][4].piece = new Pawn(1, 4, 'white')
        board[1][5].piece = new Pawn(1, 5, 'white')
        board[1][6].piece = new Pawn(1, 6, 'white')
        board[1][7].piece = new Pawn(1, 7, 'white')

        board[7][0].piece = new Rook(7, 0, 'black')
        board[7][7].piece = new Rook(7, 7, 'black')

        board[7][1].piece = new Knight(7, 1, 'black')
        board[7][6].piece = new Knight(7, 6, 'black')

        board[7][2].piece = new Bishop(7, 2, 'black')
        board[7][5].piece = new Bishop(7, 5, 'black')

        board[7][4].piece = new Queen(7, 4, 'black')
        board[7][3].piece = new King(7, 3, 'black')

        board[6][0].piece = new Pawn(6, 0, 'black')
        board[6][1].piece = new Pawn(6, 1, 'black')
        board[6][2].piece = new Pawn(6, 2, 'black')
        board[6][3].piece = new Pawn(6, 3, 'black')
        board[6][4].piece = new Pawn(6, 4, 'black')
        board[6][5].piece = new Pawn(6, 5, 'black')
        board[6][6].piece = new Pawn(6, 6, 'black')
        board[6][7].piece = new Pawn(6, 7, 'black')
        return board
    }
}

module.exports = Board 