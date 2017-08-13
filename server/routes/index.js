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

router.post('/registration', (err, res) => {
  const body = req.body
  console.log("player", body);
  db.createNewPlayer(body, req.app.get('db'))
    .then((newPlayer) => {
      res.json(newPlayer)
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

module.exports = router
