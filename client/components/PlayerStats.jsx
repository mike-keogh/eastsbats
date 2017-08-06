import React from 'react'

import {getPlayerProfile} from '../api'

export default class PlayerStats extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showVisible: false,
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
    console.log('player', player);

    return player
      ?  (
        <div className='playerStats'>
          <h1>Hello</h1>
            <ul>
              <li>{player.batting_runs}</li>
            </ul>
        </div>
    )
      : <div>Who?</div>
  }
}
