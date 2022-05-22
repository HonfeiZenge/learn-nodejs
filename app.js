'use strict'

const Express = require('express')

const app = Express()
const PORT = 3030
const HOST = 'localhost'
// Middleware
app.use('/add-product', (req, res, next) => {
  console.log('In the middleware!')
  res.send('Product Page')
  //next() // Allows the request to continue to the next middleware in line
})
app.use('/', (req, res, next) => {
  console.log('In another middleware!')
  res.send('Home Page')
})

// Start the server
app.listen(PORT, console.log(`server running on http://${HOST}:${PORT}`))