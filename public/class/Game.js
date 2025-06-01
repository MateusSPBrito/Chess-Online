class Game {
    gameMainListener(access) {
        socketOn(`${access}-game`, (obj) => {
            console.log('oiii')
        })
    }

    accessListener(access) {
        socketOn(access, (obj) => {
            socket.off(access)
            if (obj.error) return alert(obj.error.message)
            this.defGameAndPlayer(obj)
        })
    }

    newGameResponseListener() {
        socketOn('new-game-response', (obj) => {
            socket.off('new-game-response')
            if (obj.error) return alert(obj.error.message)
            this.defGameAndPlayer(obj)
        })
    }

    newGame() {
        const name = document.getElementById('name-input').value.trim()
        this.newGameResponseListener()
        socketEmit('new-game', { name })
    }

    searchGame() {
        const access = this.getAccessInput()
        const name = document.getElementById('name-input').value.trim()

        this.accessListener(access)

        socketEmit('search-game', { access, name })
    }

    defGameAndPlayer(obj) {
        this.status = obj.status
        this.player1 = obj.player1
        this.player2 = obj.player2
        this.black = obj.black
        this.white = obj.white
        this.boardData = obj.board
        this.turn = obj.turn
        this.access = obj.access

        this.renderPage(this.status, this.access, this.boardData)

        if (obj.black && obj.white) player.defNameAndColor(obj)
    }

    renderPage(status, access, boardData) {
        const home = document.getElementById('home')
        const waiting = document.getElementById('waiting')
        const boardContainer = document.getElementById('board-container')

        if (status === 'WAITING') {
            home.style.display = 'none'
            boardContainer.style.display = 'none'
            waiting.style.display = 'flex'
            this.showAccessCode(access)
            this.accessListener(access)
            return
        }
        if (status === 'IN_PROGRESS') {
            home.style.display = 'none'
            waiting.style.display = 'none'
            boardContainer.style.display = 'flex'
            this.boardElement = new Board(boardData, this)
            this.gameMainListener(access)
            return
        }

        home.style.display = 'flex'
        waiting.style.display = 'none'

    }

    showAccessCode(access) {
        const codeBoxes = document.querySelectorAll('#code-display div')

        for (let i = 0; i < codeBoxes.length; i++) {
            codeBoxes[i].textContent = access[i]
        }
    }

    getAccessInput() {
        const inputs = document.querySelectorAll('#code-input input')
        let code = ''

        inputs.forEach(input => {
            code += input.value.toUpperCase()
        })

        return code
    }

    playerAction(clickEvent) {
        console.log(this)

        // if turn != a cor do player, então return
    }
}

const game = new Game()

// black{
//     "name": "a",
//     "socketId": "zp4zU0a1Fyijb5dCAAAH"
// }

// turn: 'white'