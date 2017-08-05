import React from 'react'
import {Link} from 'react-router-dom'

import {getPlayerProfile} from '../api'
import PlayerStats from './PlayerStats'

export default class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      err: null,
      player: null
    }
  }

  componentWillMount() {
    this.refreshPlayerData()
  }

  componentWillUpdate() {
    this.refreshPlayerData()
  }

  savePlayer(err, player) {
    this.setState({err, player: player})
  }

  refreshPlayerData() {
    getPlayerProfile(this.props.match.params.id, this.savePlayer.bind(this))
  }

  render() {
    const {player} = this.state

    return player
      ? (
        <div>
          <ul>
            <li>Name: {player.name}</li>
            <li>Born: {player.born}</li>
            <li>Age: {player.age}</li>
            <li>Major Teams: {player.teams}</li>
            <li>Playing Role: {player.playing_role}</li>
            <li>Batting Style: {player.batting_style}</li>
            <li>Bowling Style: {player.bowling_style}</li>
            <li><img className='playerImage' src={player.image} /></li>
          </ul>
          <Link to={'/team/profile/' + player.id + '/stats'} component={PlayerStats}>Batting Statistics</Link>
        </div>
      )
    : <div>Who?</div>
  }
}
