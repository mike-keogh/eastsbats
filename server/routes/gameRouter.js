var express = require('express')
var router = express.Router()

var gameDb = require('../db/gameDb')

router.get('/', (req, res) => {
  gameDb.showGameList(req.body, req.app.get('db'))
    .then((game) => {
      res.json(game)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/:game_id', (req, res) => {
  gameDb.getGameById(req.params.game_id, req.app.get('db'))
    .then((game) => {
      res.json(game)
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

router.delete('/:game_id', (req, res) => {
  gameDb.deleteGame(req.params.game_id, req.app.get('db'))
    .then( () => res.sendStatus(202))
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
