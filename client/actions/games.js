import request from 'superagent'

//GET
export const receiveGameAction = (game) => {
  return {
    type: 'RECEIVE_GAME',
    game
  }
}

export function receiveGameRequest (game) {
  return (dispatch) => {
    request
    .get('/v1/games')
    .end((err, res) => {
      if (err) {
        console.error(err.message)
        return
      }
      dispatch(recieveGameAction(res.body))
    })
  }
}

//POST
export const addGameAction = (newGame) => {
  return {
    type: 'ADD_GAME',
    newGame
  }
}

export function addGameRequest (newGame) {
  return (dispatch) => {
    request
    .post('v1/games')
    .send(newGame)
    .end((err, res) => {
      if(err) {
        console.error(err.message)
        return
      }
      dispatch(addGameAction(res.body))
    })
  }
}
