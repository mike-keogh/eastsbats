import React from 'react'
import { connect } from 'react-redux'

import { addPlayerRequest } from '../actions/team'

class Registration extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newPlayer: {
        batting_style: 'Right-hand Bat'
      }
    }
  }
  newPlayerDetails (e) {
    const newPlayer = this.state.newPlayer
    newPlayer[e.target.name] = e.target.value
    this.setState({
      newPlayer: newPlayer
    })
  }

  submitPlayer (e) {
    e.preventDefault()
    document.location = '/#/team'
    this.props.dispatch(addPlayerRequest(this.state.newPlayer))
  }

  render() {
    return (

      <form className="addNewPlayer" onSubmit={this.submitPlayer.bind(this)}>
        <input name="name" placeholder="name" type="text" onChange={this.newPlayerDetails.bind(this)}/><br/>
        <input name="born" placeholder="born" type="text" onChange={this.newPlayerDetails.bind(this)}/><br/>
        <input name="age" placeholder="age" type="text" onChange={this.newPlayerDetails.bind(this)}/><br/>
        <input name="teams" placeholder="Major Teams" type="text" onChange={this.newPlayerDetails.bind(this)}/><br/>
        <input name="playing_role" placeholder="Playing Role" type="text" onChange={this.newPlayerDetails.bind(this)}/><br/>
        <select name="batting_style" onChange={this.newPlayerDetails.bind(this)}>
          <option default>Right-hand Bat</option>
          <option>Left-hand Bat</option>
        </select><br/>
        <input name="bowling_style" placeholder="Bowling Style" type="text" onChange={this.newPlayerDetails.bind(this)}/><br/>
        <input type="submit" />
      </form>
    )
  }
}

export default connect()(Registration)
