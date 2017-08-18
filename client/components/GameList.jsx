import React from 'react'
import { connect, dispatch } from 'react-redux'

import { deleteGameRequest } from '../actions/games'

function GameList ({game}) {
  return (
    <tr className="tableData">
      <td>{game.opponent}</td>
      <td>{game.location}</td>
      <td>{game.date}</td>
      <td>{game.season}</td>
      <td><button onClick={ () => this.props.dispatch(deleteGameRequest(game))}>✗</button></td>
    </tr>

  )
}

export default connect()(GameList)
