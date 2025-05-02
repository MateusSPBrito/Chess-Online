class Game {
    newGame(obj) {
        this.status = obj.status
        this.player1 = obj.player1
        this.player2 = obj.player2
        this.black = obj.black
        this.white = obj.white
        this.board = obj.board
        this.turn = obj.turn
        this.access = obj.access

        if (this.status === 'WAITING') this.renderPage(this.status, this.access)
    }

    renderPage(status, access) {
        const home = document.getElementById('home')
        const waiting = document.getElementById('waiting')

        if (status === 'WAITING') {
            home.style.display = 'none'
            waiting.style.display = 'flex'
            this.showAccessCode(access)
        }
        else {
            home.style.display = 'flex'
            waiting.style.display = 'none'
        }
    }

    showAccessCode(access) {
        const codeBoxes = document.querySelectorAll('#code-display div');

        for (let i = 0; i < codeBoxes.length; i++) {
            codeBoxes[i].textContent = access[i];
        }
    }
}

const game = new Game()