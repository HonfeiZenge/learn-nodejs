'use strict'

const Express = require('express')

const app = Express()
const PORT = 3030
const host = 'localhost'

app.listen(PORT, console.log(`server running on http://${host}:${PORT}`))

app.get('/', (req, res) => {
  res.send('hai hai hai')
})