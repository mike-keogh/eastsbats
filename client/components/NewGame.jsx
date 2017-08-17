import React from 'react'
import { connect } from 'react-redux'

import { addGameRequest, receiveGameRequest } from '../actions/games'

class NewGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newGame: {},
      showVisible: false
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
      showVisible: !this.state.showVisible
    })
  }

  render() {
    const { games } = this.props
    console.log('games', games)

    return (
      <div className="gameForm">
        <button onClick={(e) => this.toggleSelected()}> New Game</button>
        {this.state.showVisible &&
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
          <ul>
            {games.map((game, i) => {
              return <div key={i}>
                <li>Location: {game.location}</li>
                <li>Opponent: {game.opponent}</li>

              </div>
            })}


          </ul>
        </div>

      </div>
    )
  }
}
function mapStateToProps (state, props) {
    return {
      games: state.games
    }
  }

export default connect(mapStateToProps)(NewGame)
