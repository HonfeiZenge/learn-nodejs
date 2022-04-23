'use strict'

const http = require('http')

const reqHandler = require('./routes')
const PORT = 4000

const server = http.createServer(reqHandler)

server.listen(PORT, 'localhost', () => {
  console.log(`Server running on http://localhost:${PORT}`)
})