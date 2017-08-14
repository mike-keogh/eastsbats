import request from 'superagent'

export const addPlayerAction = (player) => {
  return {
    type: 'ADD_PLAYER',
    player
  }
}

export function addPlayerRequest () {
  return (dispatch) => {
    .post('/v1/team')
    .end((err, res) => {
      if(err) {
        console.error(err.message)
        return
      }
      dispatch(addPlayerAction(res.body))
    })
  }
}
