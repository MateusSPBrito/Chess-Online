class Game {
    gameMainListener(access) {
        socketOn(`${access}-game`, (obj) => {
            console.log('inicio da partida')
        })
    }

    accessListener(access) {
        socketOn(access, (obj) => {
            socket.off(access)
            if (obj.error) return alert(obj.error.message)
            this.defGame(obj)
            console.log(obj);
        })
    }

    newGameResponseListener() {
        socketOn('new-game-response', (obj) => {
            socket.off('new-game-response')
            if (obj.error) return alert(obj.error.message)
            this.defGame(obj)
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

    defGame(obj) {
        this.status = obj.status
        this.player1 = obj.player1
        this.player2 = obj.player2
        this.black = obj.black
        this.white = obj.white
        this.boardData = obj.board
        this.turn = obj.turn
        this.access = obj.access

        console.log(this.board)

        this.renderPage(this.status, this.access, this.boardData)
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
            this.boardElement = new Board(boardData)
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
}

const game = new Game()