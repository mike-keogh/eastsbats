import request from 'superagent'

var requestUrl = '/v1'

//example of an api request function on client side

export function getSomething(callback) {
  request
    .get(requestUrl)
    .end((err, res) => {
      if (err) callback(err)
      else callback(null, res.body)
    })
}

export function getTeam(callback) {
  request
    .get('/v1/team')
    .end((err, res) => {
      if (err) callback(err)
      else callback(null, res.body)
    })
}

export function getPlayerProfile(id, callback) {
  request
    .get('/v1/team/profile/' + id)
    .end((err, res) => {
      if (err) callback(err)
      else callback(null, res.body)
    })
}
