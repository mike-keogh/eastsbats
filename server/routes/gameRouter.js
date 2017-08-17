var express = require('express')
var router = express.Router()

var gameDb = require('../db/gameDb')

//seperate the /team routes into a teamRouter.js file, have a seperate server,use for /v1/team to remove redundancy


//seperate these out to a gameRouter.js file, and add a server.use for '/v1/games' (rename from newGame to games)

router.get('/', (req, res) => {
  gameDb.showGameList(req.body, req.app.get('db'))
    .then((game) => {
      res.json(game)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/', (req, res) => {
  gameDb.insertNewGame(req.body, req.app.get('db'))
    .then((game) => {
      res.status(201).json(game)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
