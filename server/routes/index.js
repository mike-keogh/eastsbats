var express = require('express')
var router = express.Router()

var db = require('../db/db')

router.get('/team/profile/:id', function(req, res) {
  db.getProfile(req.params.id, req.app.get('db'))
  .then(function(player) {
    db.getPlayerBowling(req.params.id, req.app.get('db'))
      .then(function(bowling) {
        db.getPlayerBatting(req.params.id, req.app.get('db'))
          .then(function(batting) {
            res.json({player, bowling, batting})
          })
      })
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.delete('/team/profile/:id', (req, res) => {
  db.deletePlayer(req.params.id, req.app.get('db'))
    .then( () => res.status(202))
    .catch(err => res.status(500).send(err.message + 'SERVER ERROR'))
})

router.post('/team', (req, res) => {
  db.createNewPlayer(req.body, req.app.get('db'))
    .then((newPlayer) => {
      res.status(201).json(newPlayer)
    })
})

// router.post('/team/profile/:id', function(req, res) {
//   var id = req.params.id
//   var body = req.body
//   db.editProfile(id, body, req.app.get('db'))
//     .then(function(player) {
//       res.redirect('/team/profile/' + id)
//     })
// })

router.get('/team', function(req, res) {
  db.getPlayer(req.app.get('db'))
    .then(function(players) {
      res.json(players)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/newGame', (req, res) => {
  db.showGameList(req.body, req.app.get('db'))
    .then((game) => {
      res.json(game)
    })
})

router.post('/newGame', (req, res) => {
  db.insertNewGame(req.body, req.app.get('db'))
    .then((game) => {
      res.status(201).json(game)
    })
})

module.exports = router
