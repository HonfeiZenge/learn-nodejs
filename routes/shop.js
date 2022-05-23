'use strict'

const Express = require('express')

const Router = Express.Router()

Router.get('/', (req, res, next) => {
  res.send('Home Page')
})

module.exports = Router
