var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/team/profile/:id', function(req, res) {
  db.getProfile(req.params.id, req.app.get('db'))
  .then(function(player) {
    res.render('profile', player[0])
    console.log(player);
  }).catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})


router.post('/team/profile/:id', function(req, res) {
  var id = req.params.id
  db.editProfile(id, req.body, req.app.get('db'))
    .then(function(player) {
      res.redirect('/team/profile/' + id)
    })


})

router.get('/index', function(req, res) {
  db.getPlayer(req.app.get('db'))
    .then(function(player) {
      res.render('index', { players: player} )
    })
})

router.get('/team', function(req, res) {
  db.getPlayer(req.app.get('db'))
    .then(function(player) {
      res.render('team', {players: player})
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/', function (req, res) {
  res.redirect('/team')
})


module.exports = router
