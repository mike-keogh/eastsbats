import request from 'superagent'

//GET
export const receiveGameAction = (games) => {
  console.log('action ', games);
  return {
    type: 'RECEIVE_GAMES',
    games
  }
}

export function receiveGameRequest (games) {
  return (dispatch) => {
    request
    .get('/v1/games')
    .end((err, res) => {
      if (err) {
        console.error(err.message)
        return
      }
      dispatch(receiveGameAction(res.body))
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

//use the receive game request in the dipatch of the post to update new data after the post

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
