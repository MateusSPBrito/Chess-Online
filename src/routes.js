const { Router } = require('express')
const path = require('path')

const routes = new Router()

routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

module.exports = routes