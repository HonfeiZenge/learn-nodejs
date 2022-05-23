'use strict'

const Express = require('express')

const app = Express()
const PORT = 3030
const HOST = 'localhost'
// Routers import
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
// Use NodeJS Lib
app.use(Express.urlencoded({extended: false}))
// Middleware
// -- next() // Allows the request to continue to the next middleware in line --
app.use('/admin',adminRoutes)
app.use(shopRoutes)
app.use((req, res, next) => {
  res.status(404).send('<h1 style="text-align: center;">404 : Opps Page Not Found!</h1>')
})
// Start the server
app.listen(PORT, console.log(`server running on http://${HOST}:${PORT}`))