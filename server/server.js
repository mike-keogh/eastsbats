var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var server = express()

var teamRouter = require('./routes/teamRouter')
var gameRouter = require('./routes/gameRouter')

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

const corsOptions = {
  origin: true,
  methods: 'GET,PUT,POST,DELETE',
  preflightContinue: false,
  credentials: true
}

server.use(cors(corsOptions))

//your server must use the routes BELOW the cors options (and other middleware) is set
server.use('/v1/team/', teamRouter)
server.use('/v1/games/', gameRouter)

//server.use for v1/teams with teamRouter and v1/games with gameRouter

module.exports = function(db) {
  server.set('db', db)
  return server
}
