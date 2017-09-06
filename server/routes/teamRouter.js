var express = require('express')
var router = express.Router()

var playerDb = require('../db/playerDb')

router.get('/profile/:id', function(req, res) {
  playerDb.getProfile(req.params.id, req.app.get('db'))
  .then(function(player) {
    playerDb.getPlayerBowling(req.params.id, req.app.get('db'))
      .then(function(bowling) {
        playerDb.getPlayerBatting(req.params.id, req.app.get('db'))
          .then(function(batting) {
            res.json({player, bowling, batting})
          })
      })
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.delete('/profile/:id', (req, res) => {
  playerDb.deletePlayer(req.params.id, req.app.get('db'))
    .then( () => res.sendStatus(202))
    .catch(err => res.status(500).send(err.message + 'SERVER ERROR'))
})

router.post('/', (req, res) => {
  playerDb.createNewPlayer(req.body, req.app.get('db'))
    .then((newPlayer) => {
      res.status(201).json(newPlayer)
    })
})

router.get('/', function(req, res) {
  playerDb.getPlayer(req.app.get('db'))
    .then(function(players) {
      res.json(players)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
