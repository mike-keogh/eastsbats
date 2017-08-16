import React from 'react'
import request from 'superagent'
import { getPlayerProfile } from '../api'

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

    savePlayer(err, {player, batting, bowling}) {
      if (err) console.log(err);
      this.setState({err, player, batting, bowling})
    }

    refreshPlayerData() {
      request
        .get('/v1/team/profile/' + this.props.player.id)
        .end((err, res) => {
          if (err) callback(err)
          else {
            savePlayer(null, res.body)
          }
        })
    }

  render() {
    const {player, batting, bowling} = this.state
    return player
      ?  (
        <div className='playerStats'>
          {batting ?
            <div className='battingStats'>
              <h3>Batting Statistics:</h3>
              <ul>
                <li>Innings: {batting.innings}</li>
                <li>Runs: {batting.runs}</li>
                <li>Average: {batting.average}</li>
                <li>Not Out: {batting.no}</li>
              </ul>
            </div>
          : <p>This player has no Batting stats</p>
          }

            {bowling ?
              <div className="bowlingStats">
                <h4 className="battingStats">Bowling Statistics</h4>
                <ul>
                  <li>Overs: {bowling.overs}</li>
                  <li>Maidens: {bowling.maidens}</li>
                  <li>Runs: {bowling.runs}</li>
                  <li>Wickets: {bowling.wickets}</li>
                  <li>Average: {bowling.average}</li>
                </ul>
              </div>

            : <p>This player has no bowling stats</p>

            }
        </div>
    )
      : <div>Who?</div>
  }
}
