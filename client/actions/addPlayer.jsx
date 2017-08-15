import request from 'superagent'

export const addPlayerAction = (newPlayer) => {
  return {
    type: 'ADD_PLAYER',
    newPlayer
  }
}

export function addPlayerRequest (newPlayer) {
  return (dispatch) => {
    request
      .post('/v1/team')
      .send(newPlayer)
      .end((err, res) => {
        if(err) {
          console.error(err.message)
          return
        }
        dispatch(addPlayerAction(res.body))
      })
  }
}
