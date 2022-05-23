'use strict'

const Express = require('express')
const path = require('path')

const Router = Express.Router()

// /admin/add-product => GET
Router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
})
// /admin/add-product => POST
Router.post('/add-product', (req, res, next) => {
  console.log(req.body)
  res.redirect('/')
})

module.exports = Router
