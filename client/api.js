import request from 'superagent'

var requestUrl = '/v1'

export function getPlayerProfile(id, callback) {
  request
    .get('/v1/team/profile/' + id)
    .end((err, res) => {
      if (err) callback(err)
      else {
        callback(null, res.body)
      }
    })
}
