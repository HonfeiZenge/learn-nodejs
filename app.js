'use strict'

const http = require('http')
const PORT = 3000
const host = 'localhost'

const server = http.createServer((req, res) => {
  const url = req.url
  const method = req.method

  if (url === '/') {
    let template = `
    <form action="/create-user" method="POST">
      <input type="text" name="username">
      <button>Add</button>
    </form>
    `
    res.write('<h1>This is Node JS Assignment</h1>')
    res.write(template)
    return res.end()
  }
  if (url === '/users') {
    let template =  `
    <html>
    <head><title>Node JS Assignment</title></head>
    <body>
      <ul>
        <li>Kaguya</li>
        <li>Inuyasha</li>
        <li>Kogane</li>
      </ul>
    </body>
    </html>
    `
    res.write(template)
    return res.end()
  }
  if (url === '/create-user' && method === 'POST') {
    const body = []
    req.on('data', (chunk) => {
      body.push(chunk)
    })
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      const username = parsedBody.split('=')[1]
      console.log(username)
      res.statusCode = 302
      res.setHeader('Location', '/')
      return res.end()
    })
  }
})

server.listen(PORT, host, () => {
  console.log(`listening to http://${host}:${PORT}`)
})