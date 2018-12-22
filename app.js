const http = require('http')

const routes = require('./routes')

server = http.createServer(routes)

server.listen(3200)

console.log('Server listening on port 3200')
