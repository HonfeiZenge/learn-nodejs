'use strict'

const fs = require('fs')

// callback function that take our requrest and response for later used on http createServer
const reqHandler = (req, res) => {
  const url = req.url
  const method = req.method

  if (url === '/') {
    res.write('<html>')
    res.write('<head></head>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button>Click</button></form></body>')
    res.write('</html>')
    return res.end()
  }
  if (url === '/message' && method === 'POST') {
    const body = []
    req.on('data', (chunk) => {
      console.log(chunk)
      body.push(chunk)
    })
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      const message = parsedBody.split('=')[1]
      fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
      })
    })
  }
  res.setHeader('Content-Type', 'text/html')
  res.write('this is json saying hello')
  res.end()
}

module.exports = reqHandler