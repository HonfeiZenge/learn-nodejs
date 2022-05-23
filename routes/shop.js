'use strict'

const Express = require('express')
const path = require('path')

const Router = Express.Router()

Router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
})

module.exports = Router
