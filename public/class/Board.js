class Board {

    constructor(board, game) {
        this.container = document.getElementById('board')
        this.data = board.data
        this.renderBoard()
        this.game = game
    }

    renderBoard() {
        this.container.innerHTML = ''
        const playerColor = 'white'
        let cellColor = 'white'
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                let cell = document.createElement('div')
                cell.setAttribute('class', `cell-${cellColor}`)

                if (col != 7) cellColor = cellColor === 'white' ? 'black' : 'white'

                if (this.data[row][col].piece) this.rederPiece(this.data[row][col].piece, cell)

                cell.addEventListener('click', () => { this.game.playerAction(this.data[row][col]) })
                this.container.appendChild(cell)
            }
        }
    }

    rederPiece(data, container) {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        svg.setAttribute("viewBox", "0 0 126 126")
        svg.setAttribute("width", "100%")
        svg.setAttribute("height", "100%")

        let i = 0
        while (true) {
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
            path.setAttribute("d", data.path[i])

            let stroke = '#d1cfd4'
            let fill = '#1C1D22'
            if (data.color === 'white') {
                stroke = '#1C1D22'
                fill = '#d1cfd4'
            }

            path.setAttribute("stroke-width", "2")
            path.setAttribute("fill", fill)
            path.setAttribute("stroke", stroke)

            svg.appendChild(path)

            i++
            if (data.path.length === i) break
        }

        container.appendChild(svg)
    }

}