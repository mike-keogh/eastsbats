import request from 'superagent'

export const receiveTeam = (team) => {
  console.log('team', team);
  return {
    type: 'RECEIVE_TEAM',
    team
  }
}

export function getTeam () {
  return (dispatch) => {
    request
      .get('/v1/team')
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveTeam(res.body))
      })
  }
}
