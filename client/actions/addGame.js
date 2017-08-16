import request from 'superagent'

export const addGameAction = (newGame) => {
  console.log('newGame', newGame);
  return {
    type: 'ADD_GAME',
    newGame
  }
}

export function addGameRequest (newGame) {
  return (dispatch) => {
    request
    .post('v1/newGame')
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
