import React from 'react'
import { connect } from 'react-redux'

import { addGameRequest } from '../actions/games'

class NewGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newGame: {}
    }
  }

  newGameDetails (e) {
    const newGame = this.state.newGame
    this.setState({
      newGame: newGame
    })
    newGame[e.target.name] = e.target.value

  }

  submitNewGame (e) {
    e.preventDefault()
    e.target.reset()
    const { newGame } = this.state
    this.props.dispatch(addGameRequest(newGame))
  }

  render() {
    return (
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
    )
  }
}

export default connect()(NewGame)
