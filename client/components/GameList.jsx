import React from 'react'
import { connect, dispatch } from 'react-redux'

import { deleteGameRequest } from '../actions/games'

export class GameList extends React.Component {
  constructor(props){
    super(props)

  }
  // this.toggleFormFromChild = this.toggleFormFromChild.bind(this)
  //
  // toggleFormFromChild() {
  //   this.props.toggleSelected()
  // }


  render() {
    const {game} = this.props
    return (
      <tr className="tableData">
        <td>{game.opponent}</td>
        <td>{game.location}</td>
        <td>{game.date}</td>
        <td>{game.season}</td>
        <td><button onClick={ () => this.props.deleteGame(game)}>✗</button></td>
        <td><button onClick={ this.props.toggleSelected()}>Update</button></td>
        <td><button>Innings</button></td>
      </tr>

    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteGame: (game) => dispatch(deleteGameRequest(game))
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(GameList)
