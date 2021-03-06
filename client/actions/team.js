import request from 'superagent'

//GET
export const receiveTeam = (team) => {
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

//POST
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


//DELETE
export const deletePlayerAction = (player) => {
  return {
    type: 'DELETE_PLAYER' ,
    player
  }
}

export const deletePlayerRequest = (player) => {
  return (dispatch) => {
    request
      .delete('/v1/team/profile/' + player.id)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(deletePlayerAction(player))
      })
  }
}
