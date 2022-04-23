'use strict'

const http = require('http')

const PORT = 4000

// callback function that take our requrest and response for later used on http createServer
function rqListener(req, res) {
  const url = req.url
  if (url === '/') {
    res.write('<html>')
    res.write('<head></head>')
    res.write('<body><form action="/message" method="POST"><input type="text"><button>Click</button></form></body>')
    res.write('</html>')
    return res.end()
  } else {
    res.setHeader('Content-Type', 'text/html')
    res.write('this is json saying hello')
    res.end()
  }
}

const server = http.createServer(rqListener)

server.listen(PORT)