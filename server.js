const http = require('http') // Common JavaScript, for webpages, using ES6 import may be better
const port = 8080
const app = require('./app')

const server = http.createServer(app) // Create http server

server.listen(port) // Listen on our port
