var test = require('ava')
var request = require('supertest')

var createServer = require('../../server/server')
var db = require('../../server/db/gameDb')

var setupDb = require('./setup-db')
setupDb(test, createServer)

test.cb('GET /v1/games contains an object', t => {
  request(t.context.app)
    .get('/v1/games')
    .expect(200)
    .end((err, res) => {
      t.is(res.body.length >= 0, true)
      t.end()
    })
})

test.cb('POST /v1/games, db receives an object', t => {
  request(t.context.app)
    .post('/v1/games')
    .send({location: 'Wellington'})
    .expect(201)
    .end((err, res) => {
      t.context.db('game')
      .then((data) => {
        t.is(data.length, 1)
        t.is(res.body.location, 'Wellington')
      })
      t.end()
    })
})

test.cb('DELETE /v1/games/:id, can delete a game', t => {
  request(t.context.app)
    .delete('/v1/games/1')
    .expect(202)
    .end((err, res) => {
      t.context.db('game')
      .then((data) => {
        t.is(data.length, 0)
      })
      t.end()
    })
})
