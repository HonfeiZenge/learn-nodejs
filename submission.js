'use strict'

const Express = require('express')

const app = Express()

const HOST = 'localhost'
const PORT = 4040

app.use(Express.json())

app.get('/', (req, res, next) => {
  console.log('Home Middleware')
  res.send('<h1>Home Page</h1>')
})

app.get('/users', (req, res, next) => {
  console.log('Users Middleware')
  const data = [
    {id: 'USR0001', name: 'Bima Santriya'},
    {id: 'USR0002', name: 'Gama Prawira'}
  ]
  res.send(JSON.stringify(data))
})

app.listen(PORT, console.log(`listening to http://${HOST}:${PORT}`))