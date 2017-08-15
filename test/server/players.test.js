var test = require('ava')
var request = require('supertest')

var createServer = require('../../server/server')
var db = require('../../server/db/db')

var setupDb = require('./setup-db')
setupDb(test, createServer)


test.cb('GET /v1/team', t => {
  request(t.context.app)
    .get('/v1/team')
    .expect(200)
    .end((err, res) => {
      t.is(res.body.length, 11)
      t.end()
    })
})

test.cb('GET /v1/team, player name and image', t => {
  request(t.context.app)
    .get('/v1/team')
    .end((err, res) => {
      t.is('Felix Faisandier', res.body[0].name)
      t.regex(res.body[0].image, /Felix_Faisandier\.jpg/)
      t.end()
    })
})

test.cb('POST /v1/team inserts new object to db, and returns 201', t => {
  request(t.context.app)
    .post('/v1/team')
    .send({name: 'ted'})
    .expect(201)
    .end((err, res) => {
      t.context.db('players')
      .then((data) => {
        t.is(data.length, 12)
        t.is(res.body.name, 'ted')
      })
      t.end()
    })
})
