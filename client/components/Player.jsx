import React from 'react'
import {Link} from 'react-router-dom'

import {getPlayerProfile} from '../api'
import PlayerStats from './PlayerStats'

export default class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      err: null,
      player: null,
      showVisible: false
    }
  }

  componentWillMount() {
    this.refreshPlayerData(this.props.match.params.id)
  }

  componentWillReceiveProps(props) {
    console.log(props)
    this.refreshPlayerData(props.match.params.id)
    this.setState({showVisible: false})
  }

  savePlayer(err, player) {
    this.setState({err, player: player.player})
  }

  refreshPlayerData(id) {

    getPlayerProfile(id, this.savePlayer.bind(this))
  }

  toggleSelected() {
    this.setState(
      { showVisible: !this.state.showVisible }
    )
  }

  render() {
    const {player} = this.state
    return player
      ? (
        <div>

        <div className="playerDetails">
          <ul>
            <li>Name: {player.name}</li>
            <li>Born: {player.born}</li>
            <li>Age: {player.age}</li>
            <li>Major Teams: {player.teams}</li>
            <li>Playing Role: {player.playing_role}</li>
            <li>Batting Style: {player.batting_style}</li>
            <li>Bowling Style: {player.bowling_style}</li>
          </ul>

            <img src={player.image} />


        <button className='playerButton' onClick={e => this.toggleSelected()}>Show Stats</button>
      </div>

        {this.state.showVisible && <PlayerStats player={player}/>}
        </div>
      )
    : <div>Who?</div>
  }
}
