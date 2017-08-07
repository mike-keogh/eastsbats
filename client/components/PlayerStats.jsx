import React from 'react'

import {getPlayerProfile} from '../api'

export default class PlayerStats extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      player: null,
      batting: null,
      bowling: null
    }
  }

    componentWillMount() {
      this.refreshPlayerData()
    }
    // componentWillUpdate() {
    //   this.refreshPlayerData()
    // }

    savePlayer(err, {player, batting, bowling}) {
      console.log({err, player});
      this.setState({err, player, batting, bowling})
    }

    refreshPlayerData() {
      getPlayerProfile(this.props.player.id, this.savePlayer.bind(this))
    }

  render() {
    const {player, batting, bowling} = this.state
    console.log('player', bowling);

    return player
      ?  (
        <div className='playerStats'>
          <div className='battingStats'>
          <h4>Batting Statistics:</h4>
            <ul>
              <li>Innings: {batting.innings}</li>
              <li>Runs: {batting.runs}</li>
              <li>Average: {batting.average}</li>
              <li>Not Out: {batting.no}</li>
            </ul>
          </div>

            {bowling ?
              <div className="bowlingStats">
                <h4>Bowling Statistics</h4>
                <ul>
                  <li>Overs: {bowling.overs}</li>
                  <li>Maidens: {bowling.maidens}</li>
                  <li>Runs: {bowling.runs}</li>
                  <li>Wickets: {bowling.wickets}</li>
                  <li>Average: {bowling.average}</li>
                </ul>
              </div>

            : <h3>This player has no bowling stats</h3>

            }
        </div>
    )
      : <div>Who?</div>
  }
}
