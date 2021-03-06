import React from 'react'
import { connect, dispatch } from 'react-redux'

import GameList from './GameList'
import { addGameRequest, receiveGameRequest } from '../actions/games'

class NewGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newGame: {},
      newGameFormToggle: false
    }
  }

  componentDidMount () {
    this.props.dispatch(receiveGameRequest())
  }

  newGameDetails (e) {
    const newGame = this.state.newGame
    newGame[e.target.name] = e.target.value
    this.setState({
      newGame: newGame
    })
  }

  submitNewGame (e) {
    e.preventDefault()
    e.target.reset()
    const { newGame } = this.state
    this.props.dispatch(addGameRequest(newGame))
  }

  toggleSelected () {
    this.setState({
      newGameFormToggle: !this.state.newGameFormToggle
    })
  }

  render() {
    const { games } = this.props
    return (
      <div className="gameForm">
        <button className="formButton" onClick={(e) => this.toggleSelected()}>New Game</button>
        {this.state.newGameFormToggle &&
          <div className='newGameComp'>
            <h4>Update A New Game</h4>
            <form className='newGameComp' onSubmit={this.submitNewGame.bind(this)}>
              <input type='text' placeholder='opponent' name='opponent' onChange={this.newGameDetails.bind(this)}/>
              <input type='text' placeholder='location' name='location' onChange={this.newGameDetails.bind(this)}/>
              <input type='text' placeholder='season' name='season' onChange={this.newGameDetails.bind(this)}/>
              <input type='text' placeholder='date' name='date' onChange={this.newGameDetails.bind(this)}/>
              <input type='submit' />
            </form>
          </div>
        }

        <div className="gameList">
          <table className="gameTable">
            <thead>
              <tr className="tableHeader">
                <th className='tableHeadText'>Opponent</th>
                <th className='tableHeadText'>Location</th>
                <th className='tableHeadText'>Date</th>
                <th className='tableHeadText'>Season</th>
                <th className='tableHeadText'>Delete game</th>
                <th className='tableHeadText'>Update game</th>
                <th className='tableHeadText'>Innings data</th>

              </tr>
            </thead>
            <tbody>
            {games.map((game, i) => {
              return <GameList game={game} key={i} />
            })}
          </tbody>
          </table>
        </div>
      </div>
    )
  }
}
function mapStateToProps (state, props) {
    return {
      games: state.games,
      //should be visible state goes here?
    }
  }

export default connect(mapStateToProps)(NewGame)
