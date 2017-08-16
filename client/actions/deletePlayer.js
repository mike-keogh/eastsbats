import request from 'superagent'

export const deletePlayerAction = (player) => {
  return {
    type: 'DELETE_PLAYER' ,
    deletePlayer
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
        dispatch(deletePlayerAction(res.body))
      })
  }
}
