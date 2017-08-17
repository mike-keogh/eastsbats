import React from 'react'
import {Link} from 'react-router-dom'
import request from 'superagent'

import {getPlayerProfile} from '../actions/team'
import PlayerBattingStats from './PlayerBattingStats'
import PlayerBowlingStats from './PlayerBowlingStats'


export default class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      err: null,
      player: null,
      batting: null,
      bowling: null,
      showVisible: false
    }
  }

  componentWillMount() {
    this.refreshPlayerData(this.props.match.params.id)
  }

  componentWillReceiveProps(props) {
    this.refreshPlayerData(props.match.params.id)
    this.setState({showVisible: false})
  }

  savePlayer(err, {player, batting, bowling}) {
    this.setState({err, player, batting, bowling})
  }

  refreshPlayerData(id) {
    request
      .get('/v1/team/profile/' + id)
      .end((err, res) => {
        if (err) callback(err)
        else {
          this.savePlayer(null, res.body)
        }
      })
  }

  toggleSelected() {
    this.setState(
      { showVisible: !this.state.showVisible }
    )
  }

  render() {
    const {player, batting, bowling} = this.state
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

        {this.state.showVisible &&
          <div className='playerStats'>
            <PlayerBattingStats batting={batting} />
            <PlayerBowlingStats bowling={bowling} />
        </div>}
        </div>
      )
    : <div>Who?</div>
  }
}

// (
//   <div className="playerStats">
//     {batting
//       ? <BattingStats batting={batting} />
//       :
//     }
//     {
//       bowling
//         ? <BowlingStats bowling={bowling} />
//     }
//   </div>
// )
